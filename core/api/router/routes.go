package router

import (
	controller "core/api/controller"
	middleware "core/api/middleware"

	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func Config(db *gorm.DB) http.Handler {
	router := gin.Default()
	controllers := controller.Create(db)
	router.Use(cors.New(
		cors.Config{
			AllowCredentials: true,
			AllowBrowserExtensions: true,
			
			AllowHeaders: []string{
				"Origin",
				"Content-Type",
				"Accept",
				"Authorization",
			},
			AllowOrigins: []string{
				"http://localhost:8000",
				"https://www.linkedin.com",
			},
			AllowMethods: []string{
				"GET",
				"POST",
				"PUT",
				"DELETE",
			},
		},
	))

	v1 := router.Group("/api/v1")

	// Public Routes
	auth := v1.Group("/auth")
	{
		auth.GET("/linkedin", controllers.LinkedInLogin)
		auth.GET("/linkedin/callback", controllers.LinkedInCallback)
		auth.POST("/logout", controllers.Logout)
	}

	// Razorpay Webhook
	v1.POST("/payments/webhook", controllers.RazorpayWebhook)
	
	// Protected Routes
	protected := v1.Group("/")
	protected.Use(middleware.Authenticate(db))
	{
		protected.GET("/account", controllers.GetAccount)

		protected.GET("/payments/:id", controllers.GetPayment)
		protected.POST("/payments", controllers.CreatePayment)
	}

	router.Use(
		static.Serve("/", static.LocalFile("./web", true)),
	)

	return router
}
