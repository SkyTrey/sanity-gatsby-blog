export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f873774c68f4a397559ec1d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-n3u6wgx6',
                  apiId: '4bb7deb5-ed13-4014-a735-65d0c3bdadd1'
                },
                {
                  buildHookId: '5f873775bd0c1b452c8289e4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6ja5ot79',
                  apiId: '734250b6-1293-4eac-b056-96cb0b3b4b1e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SkyTrey/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6ja5ot79.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
