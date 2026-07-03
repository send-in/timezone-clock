// #region imports
import {
	_GET,
	IResponse,
} from "@/lib/api"

import {
	ITemplate,
} from "@/lib/types"
// #endregion

export const getTemplates = (): IResponse<ITemplate[]> => {
	return {
		success: true,
		data: [
            {
                id: "1",
                label: "🤝 Cold Introduction",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hey ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 👋 I came across your work at ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " and had to reach out — really impressive stuff. I'd love to connect and ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 2,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "learn more about what you're building",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": ". 🚀",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "2",
                label: "👋 Mutual Connection",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 👋 Looks like we run in the ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 2,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "same circles",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " — I noticed your work at ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " and figured it was time to properly connect. 🤝",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "3",
                label: "☕️ Coffee Chat Request",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " ☕️ — I really admire what you're building at ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": ". If you're up for it, I'd love to grab a ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 2,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "virtual coffee",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " and pick your brain sometime. My treat (well, virtually)! 😄",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "4",
                label: "💼 Job Opportunity",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 👋 I've been following ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " and I'm genuinely excited about what you're building — I'd love to explore whether there's a fit. Quick snapshot of what I bring:",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "🎯 ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[X years]",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": " of experience in ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[your field]",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "🚀 A track record of ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[key achievement]",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "🤝 Genuine passion for ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[industry/mission]",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "listType": "bullet",
                                "type": "list",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Would love to chat if you're open to it! 🙌",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "5",
                label: "🙋 Referral Request",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 🙋 I'm really interested in opportunities at ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": ". If you think my background could be a ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 2,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "good fit",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": ", I'd truly appreciate a referral. Either way, thanks so much for considering it! 🙏",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "6",
                label: "🎯 Recruiter Outreach",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 🎯 I'm actively exploring new opportunities and ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " is right at the top of my list. Here's a quick snapshot of what I bring:",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "💡 ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[X years]",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": " in ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[role/field]",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "📈 Proven results driving ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[impact]",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "🌱 Excited to grow with a team like yours",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "listType": "bullet",
                                "type": "list",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Open to a quick chat whenever works for you! 🙌",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "7",
                label: "💡 Customer Discovery",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 💡 I'm chatting with folks at companies like ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " to understand how teams tackle ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[problem space]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": ". Would love just ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "15 minutes",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " of your time to hear:",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "🔍 How you currently handle ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[problem]",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "⚡ What's working (and what's not)",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "🎯 What an ideal solution would look like",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "listType": "bullet",
                                "type": "list",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "No pitch, just genuinely curious about your perspective! 🙏",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "8",
                label: "🚀 Partnership Proposal",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 🚀 I've been keeping an eye on ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " and think there could be a really exciting opportunity to ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 2,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "team up",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": ". A few ideas I had in mind:",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "🤝 Co-marketing or joint content",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "🔗 Product or API integration",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "🌟 Shared audience growth",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "listType": "bullet",
                                "type": "list",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Would love to explore this together — open to a quick call? 📞",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "9",
                label: "🔄 Follow-up (No Response)",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hey ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 👋 Just floating this back to the top of your inbox in case it got buried. 😅 ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 2,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "No pressure at all",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " — but I'd still love to connect whenever the timing's better for you. 🙌",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "10",
                label: "🙏 Thank You",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 🙏 Thank you so much for taking the time to connect and share your insights about ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " — I really ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 2,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "appreciate",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " it. Hope we stay in touch! 🌟",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "11",
                label: "🎉 Congratulations",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 🎉 Congrats on everything happening at ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " — huge milestone! Wishing you and the team ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 2,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "continued success",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": ". 🥂 Would love to stay connected!",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "12",
                label: "📖 Advice Request",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 📖 I've been following your journey at ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " and I'm genuinely inspired. If you ever have a few spare minutes, I'd ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 2,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "love your advice",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " on something I'm working through. No worries if not — just thought I'd ask! 🙏",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "13",
                label: "🛠️ Product Feedback",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 🛠️ I'm building something I think could genuinely help teams like ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": ". Would you be open to sharing a few minutes of honest feedback on:",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "✅ Whether this solves a real problem for you",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "💬 What's missing or confusing",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "⭐ Whether you'd actually use it",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "listType": "bullet",
                                "type": "list",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Even 5 minutes would mean a lot! 🙏",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "14",
                label: "🎤 Podcast / Interview Invite",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 🎤 I'd love to have you on for a short conversation about your journey at ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " — I think your story could genuinely resonate. Quick details:",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "⏱️ ~20–30 minutes, whenever suits you",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "🎧 Casual, conversational format",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "📍 Fully remote, no prep needed",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "listType": "bullet",
                                "type": "list",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Let me know if you're interested — would be an honor! 🌟",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "15",
                label: "📝 Event Follow-up",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 📝 It was great catching your insights recently — your work at ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " really stood out to me. Thought it'd be great to ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 2,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "stay connected",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 🤝",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "16",
                label: "🤝 Networking",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 🤝 I love connecting with people doing interesting things in the industry, and your role at ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " definitely caught my ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 2,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "attention",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": ". Excited to connect! ✨",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "17",
                label: "👥 Hiring Manager Outreach",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 👥 I'm really excited about ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " and would love to join the team. Here's a quick snapshot of what I'd bring:",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "💪 ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[Relevant experience/skills]",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "🚀 A track record of getting things done",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "❤️ Genuine excitement for your mission",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "listType": "bullet",
                                "type": "list",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Would love to connect if you're hiring or planning to grow the team! 🙌",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "18",
                label: "📢 Product Launch",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 📢 I just launched something I think could be genuinely useful for teams like ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! Here's what it does:",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "⚡ ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[Key feature or benefit #1]",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "🎯 ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[Key feature or benefit #2]",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "💡 ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[Key feature or benefit #3]",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "listType": "bullet",
                                "type": "list",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Would love to hear what you think! 🚀",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "19",
                label: "💬 Demo Request",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 💬 I believe our solution could genuinely help ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " with:",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "⏳ Saving time on ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[task]",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "📈 Improving ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[metric]",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "🎯 Solving ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[pain point]",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "listType": "bullet",
                                "type": "list",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Would you be open to a quick 15-minute demo sometime next week? 🙌",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            },
            {
                id: "20",
                label: "🎁 Free Audit Offer",
                value: `{
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "Hi ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[name]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "! 🎁 I spent some time digging into ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 1,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "[company]",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " and spotted a few opportunities worth sharing. Happy to send over a ",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 2,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "free audit",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": " covering:",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "🔍 ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[Area 1]",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "⚙️ ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[Area 2]",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    },
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "📊 ",
                                                "type": "text",
                                                "version": 1
                                            },
                                            {
                                                "detail": 0,
                                                "format": 1,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "[Area 3]",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "listitem",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "listType": "bullet",
                                "type": "list",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "",
                                        "text": "No strings attached — just thought it might help! 😊",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1
                    }
                }`
            }
        ]
	}
}