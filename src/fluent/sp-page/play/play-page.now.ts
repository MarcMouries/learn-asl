import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { aslPlayWidget } from '../../sp-widget/asl-play/widget.now'

export const playPage = SPPage({
    pageId: 'x_snc_asl_play',
    title: 'Play',
    public: true,
    draft: false,
    dynamicTitleStructure: 'Play - Learn ASL',
    containers: [
        {
            $id: Now.ID['x_snc_asl_play_container_1'],
            name: 'Main Content',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['x_snc_asl_play_row_1'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['x_snc_asl_play_col_1'],
                            size: 12,
                            sizeSm: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_snc_asl_play_instance_1'],
                                    widget: aslPlayWidget,
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
