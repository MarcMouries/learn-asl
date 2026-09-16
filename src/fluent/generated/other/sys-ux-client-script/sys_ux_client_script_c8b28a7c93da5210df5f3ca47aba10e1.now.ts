import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c8b28a7c93da5210df5f3ca47aba10e1'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '6e920a7c93da5210df5f3ca47aba1044',
        name: 'handle search',
        required_translations: '[]',
        script: `/**
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 * @param {any} params.imports
 * @param {ApiHelpers} params.helpers
 */
function handler({
    api,
    event,
    helpers,
    imports
}) {
    console.log(\`Event \${event.name} from \${event.elementId}\`);
    console.log("payload ", event.payload);
    let searchTerm;
    if (event.elementId == "search_input") {
        searchTerm = event.payload.searchTerm;
    }
    if (event.elementId == "text_input") {
        searchTerm = event.payload.fieldValue;
    }

    // Convert searchTerm to uppercase and split into individual letters
    // Example: If searchTerm is "ABC", letterList will be ["A", "B", "C"]
    let letterList = searchTerm.toUpperCase().split('');
    console.log(letterList);
    // Generate a list of image objects for each letter
    let aslImageURLs = api.state.ASL_Image_URLs;
    console.log(aslImageURLs);

    // Generate image list based on object lookup
    let imageList = letterList.map(letter => {
        return aslImageURLs[letter] ? {
            letter: letter, // Add the letter property
            image_url: aslImageURLs[letter] // Add the image URL property
        } : null;
    }).filter(Boolean); // Filter out null entries
    // Update the client state parameter with the image list
    api.setState('ASL_Sign_List', imageList);
    console.log(imageList);

    updateSignList(0);


    function updateSignList(index) {
        console.log("updateSignList=" + index);

    }
}`,
        script_api_version: '2.0.0',
        sys_name: 'handle search',
        target: 'macroponent',
        type: 'default',
    },
})
