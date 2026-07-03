package model

import (
	"time"
	"github.com/google/uuid"
)

type Plan string
const (
	Free Plan = "free"
	Pro  Plan = "pro"
)

type Account struct {
	ID    uuid.UUID `gorm:"<-:create;type:uuid;default:gen_random_uuid();primaryKey"`
	Email string `gorm:"uniqueIndex"`
	Name  string `gorm:"not null"`
	Profile  string
	Picture  string
	
	Payments 	[]Payment
	Plan 		Plan `gorm:"default:'free'"`
	CreatedAt time.Time
	UpdatedAt time.Time
}

func (a *Account) IsFree() bool {
	return a.Plan == Free
}