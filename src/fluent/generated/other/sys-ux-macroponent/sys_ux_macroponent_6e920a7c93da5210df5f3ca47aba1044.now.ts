import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['6e920a7c93da5210df5f3ca47aba1044'],
    table: 'sys_ux_macroponent',
    data: {
        associated_types: '',
        bundles: '[]',
        category: 'page',
        component_dependencies: '',
        composition: `[
    {
        "definition": {
            "id": "d356d14b6e293a3020a244b63d278d8f",
            "type": "MACROPONENT"
        },
        "elementId": "container_1",
        "elementLabel": "Container 1",
        "eventMappings": [],
        "isHidden": {
            "type": "JSON_LITERAL",
            "value": null
        },
        "overrides": {
            "composition": [
                {
                    "definition": {
                        "id": "bb0f92e8d7eff1590624bfe69d316f23",
                        "type": "MACROPONENT"
                    },
                    "elementId": "text_input",
                    "elementLabel": "Text Input",
                    "eventMappings": [
                        {
                            "eventMappingId": "ccFzsePvnAEkWeeddJMPpHYasPbbZ",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_input.NOW_INPUT#INPUT",
                            "sourceEventCorrelationId": null,
                            "sourceEventDefinition": {
                                "apiName": "sn_input.NOW_INPUT#INPUT",
                                "id": null,
                                "type": "UXEVENT"
                            },
                            "sourceEventSysId": null,
                            "targets": [
                                {
                                    "broker": null,
                                    "clientScript": {
                                        "payload": {
                                            "type": "JSON_LITERAL",
                                            "value": {}
                                        },
                                        "sysId": "c8b28a7c93da5210df5f3ca47aba10e1"
                                    },
                                    "conditional": null,
                                    "declarativeAction": null,
                                    "event": null,
                                    "operation": null,
                                    "targetId": "VUTuAfIJCEQajjgMPjsiihhhbXh",
                                    "type": "CLIENT_SCRIPT"
                                }
                            ]
                        }
                    ],
                    "isHidden": {
                        "type": "JSON_LITERAL",
                        "value": true
                    },
                    "preset": null,
                    "propertyValues": {
                        "align": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "autofocus": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "configAria": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "disabled": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "enableCaretSlot": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "fieldLayout": {
                            "type": "JSON_LITERAL",
                            "value": {
                                "layout": "vertical"
                            }
                        },
                        "helperContent": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "hideRequiredIndicator": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "invalid": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "label": {
                            "type": "TRANSLATION_LITERAL",
                            "value": {
                                "code": null,
                                "comment": "",
                                "message": ""
                            }
                        },
                        "landmark": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "manageInvalid": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "manageValue": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "max": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "maxlength": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "messages": {
                            "container": [],
                            "type": "LIST_CONTAINER"
                        },
                        "min": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "minlength": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "multiple": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "name": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "optional": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "pattern": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "placeholder": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "readonly": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "required": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "size": {
                            "type": "JSON_LITERAL",
                            "value": "md"
                        },
                        "step": {
                            "type": "JSON_LITERAL",
                            "value": "any"
                        },
                        "type": {
                            "type": "JSON_LITERAL",
                            "value": "text"
                        },
                        "value": {
                            "type": "CLIENT_RESPONSIVE_QUERY",
                            "value": {
                                "default": {
                                    "type": "JSON_LITERAL",
                                    "value": null
                                },
                                "queries": [
                                    {
                                        "queryId": "now_medium",
                                        "value": {
                                            "binding": {
                                                "address": [
                                                    "text_input"
                                                ]
                                            },
                                            "type": "STATE_BINDING"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "slot": null,
                    "styles": {
                        "default": {},
                        "queries": [
                            {
                                "queryId": "now_medium",
                                "value": {
                                    "font-size": "60px"
                                }
                            }
                        ]
                    }
                },
                {
                    "definition": {
                        "id": "844d56291d91b330f2269558e3f47701",
                        "type": "MACROPONENT"
                    },
                    "elementId": "button_iconic_1",
                    "elementLabel": "Button iconic 1",
                    "eventMappings": [
                        {
                            "eventMappingId": "QddtaoPGeBEyleeddPsMlRPbiieid",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_button.NOW_BUTTON_ICONIC#CLICKED",
                            "sourceEventCorrelationId": null,
                            "sourceEventDefinition": {
                                "apiName": "sn_button.NOW_BUTTON_ICONIC#CLICKED",
                                "id": null,
                                "type": "UXEVENT"
                            },
                            "sourceEventSysId": null,
                            "targets": [
                                {
                                    "broker": null,
                                    "clientScript": null,
                                    "conditional": null,
                                    "declarativeAction": null,
                                    "event": {
                                        "apiName": "sn_uxf.MACROPONENT_STATE_UPDATE_REQUESTED",
                                        "payload": {
                                            "script": {
                                                "apiVersion": "1.0.0",
                                                "controllerElementId": null,
                                                "inlineScript": "/**\\n* @param {params} params\\n* @param {api} params.api\\n* @param {any} params.event\\n*/\\nfunction evaluateEvent({api, event}) {\\n\\treturn {\\n\\t\\tpropName: \\"text_input\\",\\n\\t\\tvalue: \\"\\"\\n\\t};\\n}",
                                                "scriptSysId": null,
                                                "target": null
                                            },
                                            "type": "CLIENT_TRANSFORM_SCRIPT"
                                        },
                                        "sysId": "32408b42ff7a10109046e490703bf176"
                                    },
                                    "operation": null,
                                    "targetId": "mpcpifJDAUddcjjcIOXXvkJeeddpl",
                                    "type": "EVENT"
                                },
                                {
                                    "broker": null,
                                    "clientScript": null,
                                    "conditional": null,
                                    "declarativeAction": null,
                                    "event": {
                                        "apiName": "sn_uxf.MACROPONENT_STATE_UPDATE_REQUESTED",
                                        "payload": {
                                            "script": {
                                                "apiVersion": "1.0.0",
                                                "controllerElementId": null,
                                                "inlineScript": "/**\\n* @param {params} params\\n* @param {api} params.api\\n* @param {any} params.event\\n*/\\nfunction evaluateEvent({api, event}) {\\n\\treturn {\\n\\t\\tpropName: \\"ASL_Sign_List\\",\\n\\t\\tvalue: []\\n\\t};\\n}",
                                                "scriptSysId": null,
                                                "target": null
                                            },
                                            "type": "CLIENT_TRANSFORM_SCRIPT"
                                        },
                                        "sysId": "32408b42ff7a10109046e490703bf176"
                                    },
                                    "operation": null,
                                    "targetId": "uSmggKvRccAkhhcjjVoMHRZQeeeeddZb",
                                    "type": "EVENT"
                                }
                            ]
                        }
                    ],
                    "isHidden": {
                        "type": "JSON_LITERAL",
                        "value": true
                    },
                    "preset": null,
                    "propertyValues": {
                        "bare": {
                            "type": "CLIENT_RESPONSIVE_QUERY",
                            "value": {
                                "default": {
                                    "type": "JSON_LITERAL",
                                    "value": false
                                },
                                "queries": [
                                    {
                                        "queryId": "now_medium",
                                        "value": {
                                            "type": "JSON_LITERAL",
                                            "value": true
                                        }
                                    }
                                ]
                            }
                        },
                        "configAria": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "disabled": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "hidePadding": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "highContrast": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "icon": {
                            "type": "CLIENT_RESPONSIVE_QUERY",
                            "value": {
                                "default": {
                                    "type": "JSON_LITERAL",
                                    "value": "magnifying-glass-outline"
                                },
                                "queries": [
                                    {
                                        "queryId": "now_medium",
                                        "value": {
                                            "type": "JSON_LITERAL",
                                            "value": "close-outline"
                                        }
                                    }
                                ]
                            }
                        },
                        "landmark": {
                            "type": "JSON_LITERAL",
                            "value": null
                        },
                        "size": {
                            "type": "CLIENT_RESPONSIVE_QUERY",
                            "value": {
                                "default": {
                                    "type": "JSON_LITERAL",
                                    "value": "md"
                                },
                                "queries": [
                                    {
                                        "queryId": "now_medium",
                                        "value": {
                                            "type": "JSON_LITERAL",
                                            "value": "lg"
                                        }
                                    }
                                ]
                            }
                        },
                        "tooltipContent": {
                            "type": "TRANSLATION_LITERAL",
                            "value": {
                                "code": null,
                                "comment": "",
                                "message": "Enter a label"
                            }
                        },
                        "variant": {
                            "type": "CLIENT_RESPONSIVE_QUERY",
                            "value": {
                                "default": {
                                    "type": "JSON_LITERAL",
                                    "value": "secondary"
                                },
                                "queries": [
                                    {
                                        "queryId": "now_medium",
                                        "value": {
                                            "type": "JSON_LITERAL",
                                            "value": "primary"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "slot": null,
                    "styles": null
                },
                {
                    "definition": {
                        "id": "ce26d6793802478648556dc1f88fe020",
                        "type": "MACROPONENT"
                    },
                    "elementId": "search_input",
                    "elementLabel": "search_input",
                    "eventMappings": [
                        {
                            "eventMappingId": "NaVlnfjxDUfBjjeehhkJxjqbbMbbam",
                            "isConfiguration": false,
                            "offRowStorageId": null,
                            "sourceEventApiName": "sn_search_combobox.SN_SEARCH_COMBOBOX#SEARCH_EXECUTED",
                            "sourceEventCorrelationId": null,
                            "sourceEventDefinition": {
                                "apiName": "sn_search_combobox.SN_SEARCH_COMBOBOX#SEARCH_EXECUTED",
                                "id": null,
                                "type": "UXEVENT"
                            },
                            "sourceEventSysId": null,
                            "targets": [
                                {
                                    "broker": null,
                                    "clientScript": {
                                        "payload": {
                                            "type": "JSON_LITERAL",
                                            "value": {}
                                        },
                                        "sysId": "c8b28a7c93da5210df5f3ca47aba10e1"
                                    },
                                    "conditional": null,
                                    "declarativeAction": null,
                                    "event": null,
                                    "operation": null,
                                    "targetId": "tBTgiieehheeddggDEfFeeddGcJjYGffhhXEu",
                                    "type": "CLIENT_SCRIPT"
                                }
                            ]
                        }
                    ],
                    "isHidden": {
                        "type": "JSON_LITERAL",
                        "value": null
                    },
                    "preset": null,
                    "propertyValues": {
                        "disableAutocomplete": {
                            "type": "CLIENT_RESPONSIVE_QUERY",
                            "value": {
                                "default": {
                                    "type": "JSON_LITERAL",
                                    "value": false
                                },
                                "queries": [
                                    {
                                        "queryId": "now_medium",
                                        "value": {
                                            "type": "JSON_LITERAL",
                                            "value": true
                                        }
                                    }
                                ]
                            }
                        },
                        "placeholder": {
                            "type": "TRANSLATION_LITERAL",
                            "value": {
                                "code": null,
                                "comment": "",
                                "message": "Type"
                            }
                        },
                        "placement": {
                            "type": "JSON_LITERAL",
                            "value": "body"
                        },
                        "searchContextConfigId": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "searchTerm": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        }
                    },
                    "slot": null,
                    "styles": null
                }
            ],
            "layout": {
                "default": {
                    "children": null,
                    "items": [
                        {
                            "element_id": "text_input"
                        },
                        {
                            "element_id": "button_iconic_1"
                        },
                        {
                            "element_id": "search_input"
                        }
                    ],
                    "root": null,
                    "rules": null,
                    "styles": {
                        "align-items": "center",
                        "display": "flex",
                        "flex-direction": "row",
                        "justify-content": "center"
                    },
                    "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
                    "type": "flex"
                },
                "queries": [
                    {
                        "layout": {
                            "items": [],
                            "styles": {
                                "height": "auto"
                            },
                            "type": "flex"
                        },
                        "queryId": "custom_ff_1"
                    },
                    {
                        "layout": {
                            "items": [],
                            "styles": {
                                "align-items": "center"
                            },
                            "type": "flex"
                        },
                        "queryId": "now_medium"
                    }
                ],
                "version": "3.1.0"
            }
        },
        "preset": null,
        "propertyValues": {
            "ariaRegionHeadingLevel": {
                "type": "JSON_LITERAL",
                "value": "1"
            },
            "ariaRegionName": {
                "type": "TRANSLATION_LITERAL",
                "value": {
                    "code": null,
                    "comment": "",
                    "message": ""
                }
            },
            "ariaRole": {
                "type": "JSON_LITERAL",
                "value": ""
            },
            "hideEmptyStateUi": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "includeAriaHeading": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "type": {
                "type": "JSON_LITERAL",
                "value": "section"
            }
        },
        "slot": null,
        "styles": {
            "default": {},
            "queries": [
                {
                    "queryId": "custom_ff_1",
                    "value": {
                        "height": "auto"
                    }
                },
                {
                    "queryId": "now_medium",
                    "value": {}
                }
            ]
        }
    },
    {
        "definition": {
            "id": "REPEATER",
            "type": "REPEATER"
        },
        "elementId": "repeater_2",
        "elementLabel": "Repeater 2",
        "eventMappings": [],
        "isHidden": {
            "type": "JSON_LITERAL",
            "value": null
        },
        "overrides": {
            "composition": [
                {
                    "definition": {
                        "id": "d356d14b6e293a3020a244b63d278d8f",
                        "type": "MACROPONENT"
                    },
                    "elementId": "container_sign",
                    "elementLabel": "Container Sign",
                    "eventMappings": [],
                    "isHidden": {
                        "type": "JSON_LITERAL",
                        "value": null
                    },
                    "overrides": {
                        "composition": [
                            {
                                "definition": {
                                    "id": "15fe506403f8a98575b6df59008ea8f1",
                                    "type": "MACROPONENT"
                                },
                                "elementId": "image_1",
                                "elementLabel": "Image 1",
                                "eventMappings": [],
                                "isHidden": {
                                    "type": "JSON_LITERAL",
                                    "value": null
                                },
                                "preset": null,
                                "propertyValues": {
                                    "alt": {
                                        "type": "TRANSLATION_LITERAL",
                                        "value": {
                                            "code": null,
                                            "comment": "",
                                            "message": ""
                                        }
                                    },
                                    "configAria": {
                                        "container": {
                                            "link": {
                                                "container": {},
                                                "type": "MAP_CONTAINER"
                                            }
                                        },
                                        "type": "MAP_CONTAINER"
                                    },
                                    "fit": {
                                        "type": "JSON_LITERAL",
                                        "value": "contain"
                                    },
                                    "height": {
                                        "type": "JSON_LITERAL",
                                        "value": 100
                                    },
                                    "href": {
                                        "type": "JSON_LITERAL",
                                        "value": ""
                                    },
                                    "landmark": {
                                        "type": "JSON_LITERAL",
                                        "value": false
                                    },
                                    "position": {
                                        "type": "JSON_LITERAL",
                                        "value": "center center"
                                    },
                                    "sources": {
                                        "type": "JSON_LITERAL",
                                        "value": []
                                    },
                                    "src": {
                                        "binding": {
                                            "address": [
                                                "image_url"
                                            ],
                                            "category": "value"
                                        },
                                        "type": "REPEATER_ITEM_BINDING"
                                    },
                                    "width": {
                                        "type": "JSON_LITERAL",
                                        "value": 100
                                    }
                                },
                                "slot": null,
                                "styles": {
                                    "default": {}
                                }
                            },
                            {
                                "definition": {
                                    "id": "4335ba6dca80378f7ba7a67cd6667bec",
                                    "type": "MACROPONENT"
                                },
                                "elementId": "stylized_text_1",
                                "elementLabel": "Stylized text 1",
                                "eventMappings": [],
                                "isHidden": {
                                    "type": "JSON_LITERAL",
                                    "value": null
                                },
                                "preset": null,
                                "propertyValues": {
                                    "configAria": {
                                        "container": {},
                                        "type": "MAP_CONTAINER"
                                    },
                                    "css": {
                                        "type": "JSON_LITERAL",
                                        "value": "* { \\n    color: yellowgreen;\\n}"
                                    },
                                    "tag": {
                                        "type": "JSON_LITERAL",
                                        "value": "h1"
                                    },
                                    "text": {
                                        "binding": {
                                            "address": [
                                                "letter"
                                            ],
                                            "category": "value"
                                        },
                                        "type": "REPEATER_ITEM_BINDING"
                                    }
                                },
                                "slot": null,
                                "styles": null
                            }
                        ],
                        "layout": {
                            "default": {
                                "children": null,
                                "items": [
                                    {
                                        "element_id": "image_1"
                                    },
                                    {
                                        "element_id": "stylized_text_1"
                                    }
                                ],
                                "root": null,
                                "rules": null,
                                "styles": {
                                    "align-items": "center",
                                    "display": "flex",
                                    "flex-direction": "column"
                                },
                                "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
                                "type": "flex"
                            },
                            "queries": [
                                {
                                    "layout": {
                                        "items": [],
                                        "styles": {
                                            "height": "auto"
                                        },
                                        "type": "flex"
                                    },
                                    "queryId": "custom_ff_1"
                                }
                            ],
                            "version": "3.1.0"
                        }
                    },
                    "preset": null,
                    "propertyValues": {
                        "ariaRegionHeadingLevel": {
                            "type": "JSON_LITERAL",
                            "value": "1"
                        },
                        "ariaRegionName": {
                            "type": "TRANSLATION_LITERAL",
                            "value": {
                                "code": null,
                                "comment": "",
                                "message": ""
                            }
                        },
                        "ariaRole": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "hideEmptyStateUi": {
                            "type": "JSON_LITERAL",
                            "value": true
                        },
                        "includeAriaHeading": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "type": {
                            "type": "JSON_LITERAL",
                            "value": "section"
                        }
                    },
                    "slot": null,
                    "styles": {
                        "default": {},
                        "queries": [
                            {
                                "queryId": "custom_ff_1",
                                "value": {
                                    "height": "auto"
                                }
                            }
                        ]
                    }
                }
            ],
            "layout": {
                "default": {
                    "children": null,
                    "items": [
                        {
                            "element_id": "container_sign"
                        }
                    ],
                    "root": null,
                    "rules": null,
                    "styles": {
                        "display": "flex",
                        "flex-direction": "row",
                        "justify-content": "flex-start"
                    },
                    "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
                    "type": "flex"
                },
                "version": "3.1.0"
            }
        },
        "preset": null,
        "propertyValues": {},
        "repeatWith": {
            "binding": {
                "address": [
                    "ASL_Sign_List"
                ]
            },
            "type": "STATE_BINDING"
        },
        "slot": null,
        "styles": {
            "default": {}
        }
    }
]`,
        da_relay_models: '',
        data: '[]',
        disable_auto_reflow: false,
        dispatched_events: '',
        extends: '19be392623033300f4b4c50947bf65ba',
        form_factors: `{
    "custom_ff_1": {
        "max-width": 640,
        "reference": "macroponent"
    }
}`,
        handled_events: '',
        interfaces: '',
        internal_event_mappings: '{}',
        keyboard_shortcuts: '{}',
        layout: `{
    "default": {
        "children": null,
        "items": [
            {
                "element_id": "container_1"
            },
            {
                "element_id": "repeater_2"
            }
        ],
        "root": null,
        "rules": null,
        "styles": {
            "display": "flex",
            "flex-direction": "column",
            "margin-left": "var(--now-scalable-space--md)",
            "margin-top": "var(--now-scalable-space--md)"
        },
        "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
        "type": "flex"
    },
    "queries": [
        {
            "layout": {
                "items": [],
                "styles": {
                    "flex-direction": "column",
                    "height": "auto",
                    "min-width": null
                },
                "type": "flex"
            },
            "queryId": "custom_ff_1"
        }
    ],
    "version": "3.1.0"
}`,
        macroponent_dependencies: '',
        name: 'Default',
        props: '[]',
        required_translations: `[ {
  "message" : "Enter a label",
  "comment" : ""
}, {
  "message" : "Type",
  "comment" : ""
} ]`,
        schema_version: '1.0.0',
        state_properties: `[
    {
        "fieldType": "json",
        "id": "qIVKkvL43BEwA9vcHVi0EEbaC",
        "initialValue": {
            "type": "JSON_LITERAL",
            "value": []
        },
        "name": "ASL_Sign_List",
        "shape": "",
        "valueType": "json"
    },
    {
        "fieldType": "json",
        "id": "mN1HYfKkD0qq93gDqbVT47nPO",
        "initialValue": {
            "type": "JSON_LITERAL",
            "value": {
                "A": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Sign_language_A.svg/323px-Sign_language_A.svg.png",
                "B": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sign_language_B.svg/198px-Sign_language_B.svg.png",
                "C": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sign_language_C.svg/416px-Sign_language_C.svg.png",
                "D": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Sign_language_D.svg/242px-Sign_language_D.svg.png",
                "E": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sign_language_E.svg/286px-Sign_language_E.svg.png",
                "F": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Sign_language_F.svg/244px-Sign_language_F.svg.png",
                "G": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sign_language_G.svg/491px-Sign_language_G.svg.png",
                "H": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sign_language_H.svg/504px-Sign_language_H.svg.png",
                "I": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sign_language_I.svg/286px-Sign_language_I.svg.png",
                "J": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Sign_language_J.svg/466px-Sign_language_J.svg.png",
                "K": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sign_language_K.svg/283px-Sign_language_K.svg.png",
                "L": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Sign_language_L.svg/387px-Sign_language_L.svg.png",
                "M": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Sign_language_M.svg/310px-Sign_language_M.svg.png",
                "N": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sign_language_N.svg/305px-Sign_language_N.svg.png",
                "O": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sign_language_O.svg/353px-Sign_language_O.svg.png",
                "P": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Sign_language_P.svg/530px-Sign_language_P.svg.png",
                "Q": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Sign_language_Q.svg/384px-Sign_language_Q.svg.png",
                "R": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Sign_language_R.svg/233px-Sign_language_R.svg.png",
                "S": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sign_language_S.svg/336px-Sign_language_S.svg.png",
                "T": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sign_language_T.svg/341px-Sign_language_T.svg.png",
                "U": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sign_language_U.svg/246px-Sign_language_U.svg.png",
                "V": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sign_language_V.svg/249px-Sign_language_V.svg.png",
                "W": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sign_language_W.svg/280px-Sign_language_W.svg.png",
                "X": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sign_language_X.svg/362px-Sign_language_X.svg.png",
                "Y": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Sign_language_Y.svg/517px-Sign_language_Y.svg.png",
                "Z": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Sign_language_Z.svg/368px-Sign_language_Z.svg.png"
            }
        },
        "name": "ASL_Image_URLs",
        "shape": "",
        "valueType": "json"
    },
    {
        "id": "r61np47tdC0oV9a4PZZyCby4743",
        "initialValue": {
            "type": "JSON_LITERAL",
            "value": null
        },
        "name": "text_input",
        "shape": "",
        "valueType": "string"
    }
]`,
        style_config: '{}',
    },
})
