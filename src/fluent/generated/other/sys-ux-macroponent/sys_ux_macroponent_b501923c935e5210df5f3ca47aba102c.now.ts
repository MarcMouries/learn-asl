import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['b501923c935e5210df5f3ca47aba102c'],
    table: 'sys_ux_macroponent',
    data: {
        associated_types: '',
        bundles: '[]',
        category: 'page',
        component_dependencies: '',
        composition: `[
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
                "value": "fill"
            },
            "height": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "href": {
                "type": "JSON_LITERAL",
                "value": ""
            },
            "landmark": {
                "type": "JSON_LITERAL",
                "value": null
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
                "type": "JSON_LITERAL",
                "value": "aes_resources_ui_builder_overview.svg"
            },
            "width": {
                "type": "JSON_LITERAL",
                "value": null
            }
        },
        "slot": null,
        "styles": null
    }
]`,
        da_relay_models: '',
        data: '[]',
        disable_auto_reflow: false,
        dispatched_events: '',
        extends: '19be392623033300f4b4c50947bf65ba',
        form_factors: '{}',
        handled_events: '',
        interfaces: '',
        internal_event_mappings: '{}',
        keyboard_shortcuts: '{}',
        layout: `{
    "default": {
        "children": null,
        "items": [
            {
                "element_id": "image_1",
                "styles": {}
            }
        ],
        "root": null,
        "rules": null,
        "styles": {
            "flex-direction": "column"
        },
        "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
        "type": "flex"
    },
    "version": "3.0.0"
}`,
        macroponent_dependencies: '',
        name: 'Default',
        props: '[]',
        required_translations: '[ ]',
        schema_version: '1.0.0',
        state_properties: '[]',
        style_config: '{}',
    },
})
