import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "project1";
  a = { name: "This is anglar" };

  userInfo = [
    {
      name: "Mark Vincent",
      postTypeContent: "",
      postTypeImg: "../../assets/images/postImg1.jpg",
      postTime: "Jan 2019 10:30 AM",
      profileImage: "../../assets/images/2.jpg",
      postComments: [
        {
          commentUserPic: "../../assets/images/3.jpg",
          Comment: "Its looking good and I love this place",
          reply: [
            {
              replyUserName: "Louis",
              replyUserPhoto: "../../assets/images/4.jpg",
              replyUser: "Not that much good",
              replyLikeAndDislike: "",
              secondLevelReply: [
                {
                  secondReplyUserName: "Franklin",
                  secondReplyUserPhoto: "../../assets/images/4.jpg",
                  secondReplyUser: "Not that much good",
                  secondReplyLikeAndDislike: ""
                },
                {
                  secondReplyUserName: "Alexander",
                  secondReplyUserPhoto: "../../assets/images/5.jpg",
                  secondReplyUser:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
                    secondReplyLikeAndDislike: ""
                },
                {
                  secondReplyUserName: "Jude",
                  secondReplyUserPhoto: "../../assets/images/6.jpg",
                  secondReplyUser: "Green is better than blue",
                  secondReplyLikeAndDislike: ""
                }
              ]
            },
            {
              replyUserName: "Johnson",
              replyUserPhoto: "../../assets/images/5.jpg",
              replyUser:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.",
              replyLikeAndDislike: ""
            },
            {
              replyUserName: "Alex",
              replyUserPhoto: "../../assets/images/6.jpg",
              replyUser: "Green is better than blue",
              replyLikeAndDislike: ""
            }
          ]
        },
        {
          commentUserPic: "../../assets/images/7.jpg",
          Comment:
            "Great place already I have seen this, Its near to Tondiarpet",
          reply: [
            {
              replyUserName: "Mark",
              replyUserPhoto: "../../assets/images/8.jpg",
              replyUser:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              replyLikeAndDislike: ""
            },
            {
              replyUserName: "Jack",
              replyUserPhoto: "../../assets/images/9.jpg",
              replyUser: "Green is better than blue",
              replyLikeAndDislike: ""
            },
            {
              replyUserName: "Thomas",
              replyUserPhoto: "../../assets/images/10.jpg",
              replyUser: "Green is better than blue",
              replyLikeAndDislike: ""
            }
          ]
        }
      ],
      postLikeAndDislike: ["Vincent", "Link Man", "Mark"],
      postSharingCount: "45",
      commentsCount: "50"
    },
    {
      name: "Alexander",
      postTypeContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileImage: "../../assets/images/11.jpg",
      postTime: "Feb 2019 2:30 PM",
      postComments: [
        {
          commentUserPic: "../../assets/images/12.jpg",
          Comment: "Its looking good",
          reply: [
            {
              replyUserName: "Jude",
              replyUserPhoto: "../../assets/images/13.jpg",
              replyUser: "Not that much good",
              replyLikeAndDislike: ""
            },
            {
              replyUserName: "Road Man",
              replyUserPhoto: "../../assets/images/4.jpg",
              replyUser:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ",
              replyLikeAndDislike: ""
            },
            {
              replyUserName: "Peter",
              replyUserPhoto: "../../assets/images/5.jpg",
              replyUser: "Green is better than blue",
              replyLikeAndDislike: ""
            }
          ]
        },
        {
          commentUserPic: "../../assets/images/2.jpg",
          Comment: "Its looking good",
          reply: [
            {
              replyUserName: "Copper Black",
              replyUserPhoto: "../../assets/images/1.jpg",
              replyUser: "Not that much good",
              replyLikeAndDislike: ""
            },
            {
              replyUserName: "Smith",
              replyUserPhoto: "../../assets/images/6.jpg",
              replyUser: "Green is better than blue",
              replyLikeAndDislike: ""
            },
            {
              replyUserName: "Lee Lee",
              replyUserPhoto: "../../assets/images/5.jpg",
              replyUser:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ",
              replyLikeAndDislike: ""
            }
          ]
        }
      ],
      postLikeAndDislike: ["Vincent", "Suresh", "Mark"],
      postSharingCount: "45",
      commentsCount: "50"
    }
  ];
}
