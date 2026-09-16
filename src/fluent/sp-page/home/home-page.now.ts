import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { aslSignWidget } from '../../sp-widget/asl-sign/widget.now'

export const homePage = SPPage({
    pageId: 'x_snc_asl_home',
    title: 'Learn ASL',
    public: true,
    draft: false,
    dynamicTitleStructure: 'Learn ASL',
    containers: [
        {
            $id: Now.ID['x_snc_asl_home_container_1'],
            name: 'Main Content',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['x_snc_asl_home_row_1'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['x_snc_asl_home_col_1'],
                            size: 12,
                            sizeSm: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_snc_asl_home_instance_1'],
                                    widget: aslSignWidget,
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
