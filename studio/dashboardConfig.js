export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dba3fd341197456ae512ede',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-55ksq8sx',
                  apiId: 'f37d992d-0c56-4c78-ac07-43bbefb68fe6'
                },
                {
                  buildHookId: '5dba3fd33b23309bcfde9574',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dyz7mirq',
                  apiId: 'e42e7867-8259-4a22-b426-7a6211d7de11'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Zorig/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dyz7mirq.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
