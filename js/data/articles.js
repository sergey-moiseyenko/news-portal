;!function () {

  'use strict';

  let articles = [

    {
      id: '1',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'Sergey Moiseyenko',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '2',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2017-02-27T23:00:00'),
      author: 'Sergey',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'politics', 'media'],
    },

    {
      id: '3',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2015-02-27T23:00:00'),
      author: 'Moiseyenko',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport'],
    },

    {
      id: '4',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'Sergey Moiseyenko',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '5',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'Sergey Moiseyenko',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '6',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'Sergey',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '7',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'Moiseyenko',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '8',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'Sergey',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '9',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'Someone',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '10',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'someone',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '11',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'test',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '12',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'test',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '13',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'test',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '14',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'someone',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '15',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'test',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '16',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'test',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '17',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'someone',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '18',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'test',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '19',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'test',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '20',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'test',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

  ];

  window.articles = articles;

}();