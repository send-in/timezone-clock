package router

import (
	controller "core/api/controller"
	middleware "core/api/middleware"

	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"

	_ "core/docs"

	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
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
				"http://localhost:3000",
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

	router.GET(
		"/swagger/*any",
		ginSwagger.WrapHandler(
			swaggerFiles.Handler,
		),
	)

	v1 := router.Group("/api/v1")

	// Health
	v1.GET(
		"/health",
		func(c *gin.Context) {
			c.JSON(
				http.StatusOK,
				gin.H{
					"status": "healthy",
				},
			)
		},
	)

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

	return router
}
