/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['images.ctfassets.net']
    },
    redirects:async()=>{
        return [
            {
                source:'/duser',
                destination:'/login',
                permanent:false
            },
            {
                source:'/duser/:userid',
                destination:'/login',
                permanent:false
            },
            {
                source:'/admin',
                destination:'/login',
                permanent:false
            }
        ]
    }
}

module.exports = nextConfig
