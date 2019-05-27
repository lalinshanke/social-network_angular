import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor() { }

  userInfo = [{
    'name': 'Ram Kumar',
    'profilePicture': 'url',
    'postType': 'This my new shirt',
    'postTime': '1hr',
    'postComments': [
        {
            'profileImage': 'url',
            'Comment': 'Its looking good',
            'reply': [
                {
                    'replyUserPhoto': 'url',
                    'replyUser': 'Not that much good',
                    'replyLikeAndDislike': ''
                },
                {
                    'replyUserPhoto': 'url',
                    'replyUser': 'Green is better than blue',
                    'replyLikeAndDislike': ''
                },
                {
                    'replyUserPhoto': 'url',
                    'replyUser': 'Green is better than blue',
                    'replyLikeAndDislike': ''
                }
            ]
        },
        {
            'profileImage': 'url',
            'Comment': 'Its looking good',
            'reply': [
                {
                    'replyUserPhoto': 'url',
                    'replyUser': 'Not that much good',
                    'replyLikeAndDislike': ''
                },
                {
                    'replyUserPhoto': 'url',
                    'replyUser': 'Green is better than blue',
                    'replyLikeAndDislike': ''
                },
                {
                    'replyUserPhoto': 'url',
                    'replyUser': 'Green is better than blue',
                    'replyLikeAndDislike': ''
                }
            ]
        }
    ],
    'postLikeAndDislike': [
        'Vincent',
        'Suresh',
        'Mark'
    ],
    'postSharingCount': '45',
    'commentsCount': '50'
},
{
    'name': 'Rajesh',
    'profilePicture': 'url',
    'postType': 'Poll',
    'question': [
        {
            'country': 'Largest country in the world'
        },
        {
            'itCity': 'Best IT city in India'
        },
        {
            'bestPlayer': '2019 best player in IPL'
        }
    ],
    'selectAnswer': [
        {
            'country': [
                'India',
                'China',
                'Russia'
            ]
        },
        {
            'itCity': [
                'Chennai',
                'Delhi',
                'Bangalore'
            ]
        },
        {
            'bestPlayer': [
                'Dhoni',
                'Rohit',
                'Raina'
            ]
        }
    ],
    'result': [
        {
            'correct': 'Yes! correct answer'
        },
        {
            'incorrect': 'Selected answer is not correct'
        }
    ],
    'postDate': '1hr',
    'postLikeAndDislike': [
        'Vincent',
        'Suresh',
        'Mark'
    ],
    'postSharingCount': '45'
}];

}
