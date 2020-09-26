export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f6efe2747cd080fe59226eb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2w454rdh',
                  apiId: 'e88d795d-4696-4aeb-9ae4-74299c3a131b'
                },
                {
                  buildHookId: '5f6efe271083213e45bff60e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1hrvomt9',
                  apiId: '834bc0c8-2e76-48ef-809b-7300bd4334ca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prettydev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1hrvomt9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
