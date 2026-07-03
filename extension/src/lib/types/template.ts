export interface IRawTemplate {
	ID: string
	Label: string
	Value: string
	CreatedAt: string
	UpdatedAt: string
}

export interface ITemplate {
	id: string
	label: string
	value: string
}

export const serializeTemplate = (
	template: IRawTemplate,
): ITemplate => ({
	id: template.ID,
	label: template.Label,
	value: template.Value,
})