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
			AllowCredentials:       true,
			AllowBrowserExtensions: true,

			AllowHeaders: []string{
				"Origin",
				"Content-Type",
				"Accept",
				"Authorization",
			},
			AllowOrigins: []string{
				"https://ti-f1b3743dd3ee4c099af856cd45b5ef85.ecs.us-east-1.on.aws",
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

	router.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status": "ok",
		})
	})

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
	
	router.NoRoute(func(c *gin.Context) {
		c.File("./web/index.html")
	})

	return router
}
