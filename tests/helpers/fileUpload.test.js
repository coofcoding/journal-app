import { fileUpload } from './../../src/helpers/fileUpload';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dokm8w8b9',
    api_key: '685153441284782',
    api_secret: 'cBuJj4wVulpCpIkUjKCjmYTY_w4',
    secure: true
})

describe('Pruebas en fileUpload', () => {
 
    test('debe de subir el archivo correctamente a cloudinary', async() => {
        
        const imageUrl = 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg', '');

        await cloudinary.api.delete_resources([ 'journal-app/' + imageId ], {
            resource_type: 'image'
        });

    })

    test('debe de retornar null', async () => {
        const file = new File( [], 'foto.jpg' );

        const url = await fileUpload( file )
        expect( url ).toBe(null)
    })
    
})