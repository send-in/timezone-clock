
export interface IRawAccount {
	ID: string
	Name: string
	Email: string
	Profile: string
	Picture: string
	Timezone: string
	Plan: string
	CreatedAt: string
	UpdatedAt: string
}

export interface IAccount {
	id: string
	name: string
	email: string
	profile: string
	picture: string
	timezone: string
	plan: string
	createdAt: Date
	updatedAt: Date
}

export const serializeAccount = (
	account: IRawAccount,
): IAccount => ({
	id: account.ID,
	name: account.Name,
	email: account.Email,
	profile: account.Profile,
	picture: account.Picture,
	timezone: account.Timezone ?? "Asia/Kolkata",
	plan: account.Plan,
	createdAt: new Date(account.CreatedAt),
	updatedAt: new Date(account.UpdatedAt),
})