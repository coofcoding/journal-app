export const fileUpload = async( file ) => {

    if ( !file ) throw new Error('Not file selected');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dokm8w8b9/upload';

    let formData = new FormData();

    formData.append('upload_preset', 'react-journal')
    formData.append('file', file );

    try {

        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        } );

        if( !resp.ok ) throw new Error('This image cannot be uploaded.');

        const cloudResp = await resp.json();

        return cloudResp.secure_url;

    } catch ( error ) {
        throw new Error( error.message );
    }
}
