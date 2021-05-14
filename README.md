# vueschool-forum

This project was made following the tutorial from Vue School:
https://vueschool.io/courses/the-vuejs-3-master-class

## Tutorial exp.
- 17. Using router-link to Navigate Between Page Components

## Forum mockup
https://github.com/vueschool/forum-mockup

## Data model
``` js
data = {
  categories: [
    {
      id: 'c1',
      name: 'Chats',
      forums: ['f1']
    }
  ],
  forums: [
    {
      id: 'f1',
      name: 'fishing',
      description: 'lets talk about fishing',
      categoryId: 'c1',
      threads: ['t1']
    }
  ],
  users: [
    {
      id: 'u1',
      name: 'Alex'
    }
  ],
  threads: [
    {
      id: 't1',
      title: 'What is your favorite food?',
      publishedAt: 1681681861,
      posts: [],
      userId: ''
    }
  ],
  posts: [
    {
      id: 'p1',
      publishedAt: 1681681862,
      userId: '',
      text: 'I like burgers, and you?',
      threadId: 't1'
    }
  ]
}
```
