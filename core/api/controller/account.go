package controller

import (
	middleware "core/api/middleware"
	"net/http"
	"github.com/gin-gonic/gin"
)

// GetAccount godoc
//
//	@Summary		Get current account
//	@Description	Returns the authenticated account
//	@Tags			account
//	@Produce		json
//	@Security		CookieAuth
//	@Success		200	{object}	model.Account
//	@Failure		401	{object}	map[string]interface{}
//	@Router			/account [get]
func (c *Controller) GetAccount(context *gin.Context) {
	account := middleware.Account(context)
	_ = c.db.Save(&account).Error

	context.JSON(
		http.StatusOK,
		gin.H{
			"data": account,
		},
	)
}