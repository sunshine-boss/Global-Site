$ui.render({
    views: [{
      layout: $layout.fill,
      views: [{
        type: "label",
        props: {
          id: "home",
          text: "全球最大資源平台",
        },
        layout: function (make, view) {
          make.centerX.equalTo(view.super)
          make.top.inset(10)
        }
      }]
    },
    {
      type: "button",
      props: {
        id: "magi",
        title: "magi",
      
      },
      layout: function(make, view) {
        make.top.equalTo($("home").bottom).inset(260)
        make.centerX.equalTo(view.super)
        make.height.equalTo(30)
        make.width.equalTo(80)
      },
      events: {
        tapped: function(sender) {
          magi()
        }
      }
    },
    {
      type: "button",
      props: {
        id: "huya",
        title: "huya",
      
      },
      layout: function(make, view) {
        make.top.equalTo($("home").bottom).inset(200)
        make.centerX.equalTo(view.super)
        make.height.equalTo(30)
        make.width.equalTo(80)
      },
      events: {
        tapped: function(sender) {
          huya()
        }
      }
    },
    {
      type: "button",
      props: {
        id: "weibo",
        title: "weibo",
      
      },
      layout: function(make, view) {
        make.top.equalTo($("home").bottom).inset(260)
        make.left.equalTo($("huya").right).inset(40)
        make.height.equalTo(30)
        make.width.equalTo(80)
      },
      events: {
        tapped: function(sender) {
          weibo()
        }
      }
    },
    {
        type: "button",
        props: {
          id: "google",
          title: "Google",
        
        },
        layout: function(make, view) {
          make.top.equalTo($("home").bottom).inset(260)
          make.left.equalTo($("huya").right).inset(20)
          make.height.equalTo(30)
          make.width.equalTo(80)
        },
        events: {
          tapped: function(sender) {
            google()
          }
        }
    },
    {
        type: "button",
        props: {
          id: "youtube",
          title: "Youtube",
        
        },
        layout: function(make, view) {
          make.top.equalTo($("home").bottom).inset(260)
          make.left.equalTo($("huya").right).inset(80)
          make.height.equalTo(30)
          make.width.equalTo(80)
        },
        events: {
          tapped: function(sender) {
            youtube()
          }
        }
    },
    {
        type: "button",
        props: {
          id: "twitter",
          title: "Twitter",
        
        },
        layout: function(make, view) {
          make.top.equalTo($("home").bottom).inset(260)
          make.left.equalTo($("huya").right).inset(100)
          make.height.equalTo(30)
          make.width.equalTo(80)
        },
        events: {
          tapped: function(sender) {
            twitter()
          }
        }
    },
  
  
    //--end--
    ]
  });