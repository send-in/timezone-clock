"use client"

// #region imports
import { 
    useEffect, 
    useState 
} from "react"

import { _APP_URL } from "@/constants"

import { Copy, Search } from "@/icons"
import { TemplateCard } from "@/components"
import { parseLexical, parseLexicalHTML } from "@/utils"

import { 
    getTemplates, 
    ITemplate 
} from "@/lib"

import { 
	IconButton,
    TextField
} from "@/base"
// #endregion

export const TemplateForm = () => {
    const [templates, setTemplates] = useState<ITemplate[]>([])
    const [search, setSearch] = useState<string>("")
    const [selected, setSelected] = 
        useState<ITemplate | undefined>(templates?.at(0))
    
    useEffect(() => {
        (() => {
            const {data} = getTemplates()
            if(data){
                setTemplates(data)
                setSelected(data?.at(0))
            }
        })()
    }, [])

	return (
		<>
			<section
				data-length={(templates.length || 0) > 0}
				data-single={(templates.length || 0) < 10}
				className="
					flex flex-col gap-2 w-[50%] rounded-2xl 
					h-full relative items-start group 
                    
                    data-[length=false]:h-full
					data-[length=false]:justify-center 
                    data-[length=false]:items-center 
					data-[length=false]:bg-bluewash 
				"
			>
                 <>
                    <section className="
                        w-full flex items-center 
                        justify-between gap-10
                        pr-4
                    ">
                        <TextField
                            size="sm"
                            fullWidth
                            defaultValue={search}
                            className="text-black!"
                            variant="filled"
                            placeholder="Search"
                            endIcon={<Search size={16}/>}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.currentTarget.blur()
                                    setSearch(
                                        e.currentTarget.value.toLowerCase()
                                    )
                                }
                            }}
                            onBlur={(e)=>
                                setSearch(
                                    e.target.value.toLowerCase()
                                )
                            }
                        /> 
                    </section>
                    <section className="
                        w-full h-full justify-between 
                        flex flex-col items-end gap-2
                    ">
                        <aside className="
                            w-full h-full flex flex-col 
                            gap-2 items-center overflow-y-scroll
                            max-h-80 pr-4 pb-4
                        ">
                            {
                                !!templates?.length &&
                                templates.filter(i => 
                                    i.label.toLowerCase().includes(search) || 
                                    i.value.toLowerCase().includes(search)
                                ).map(
                                    (template, index) =>
                                        <TemplateCard
                                            key={index}
                                            template={template}
                                            selected={selected?.id === template.id}
                                            onChange={() => setSelected(template)}
                                        />
                                )
                            }
                        </aside>
                    </section>
                </> 
			</section>

			<section className="
                bg-grey-100 w-[50%]
                rounded-xl p-4 h-full
                text-sm relative
            ">
                <article
                    className="
                        flex flex-col gap-2
                        w-full h-full
                        overflow-y-scroll
                        [&_ul]:list-disc
                        [&_ul]:pl-6
                        [&_ol]:list-decimal
                        [&_ol]:pl-6
                    "
                    dangerouslySetInnerHTML={{
                        __html: parseLexicalHTML(
                            selected?.value
                        ),
                    }}
                />

                <IconButton
                    size="sm"
                    variant="fill"
                    className="absolute bottom-2 right-2"
                    onClick={async () => {
                        try {
                            await navigator.clipboard.writeText(
                                parseLexical(selected?.value)
                            )
                        } catch (err) {
                            console.error("Failed to copy:", err)
                        }
                    }}
                >
                    <Copy size={16}/>
                </IconButton>
            </section>
		</>
	)
}