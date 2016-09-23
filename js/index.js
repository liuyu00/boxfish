var _moveSlide = function(){
				this.showPageIndex = 0;
				this.pageJSON = [];
				this.init();
			};
			_moveSlide.prototype = {
				init : function(){
					this.addEvent()
					
				},
				
				addEvent : function(){
					var that = this;
					$( "body" ).swipeUp(function(){
						that.nextPage();
					}).swipeDown(function(){
						that.prevPage();
					})
				},
				
				gotoPage : function(index,initShow){
					var that = this;
					if( !initShow ){
						that.runSpirit( that.pageJSON[that.showPageIndex],false )
					}
					setTimeout(function(){
						$("#wrap").animate({
							translateY : -(index*100)+"%"
						},10,function(){
							that.showPageIndex = index;
							that.runSpirit( that.pageJSON[index],true )
						})
					},1000)
					
				},
				
				nextPage : function(){
					var index = this.showPageIndex+1;
					if( index >= this.pageJSON.length ) index = this.pageJSON.length-1;
					this.gotoPage(index)
				},
				
				prevPage : function(){
					var index = this.showPageIndex-1;
					if( index < 0 ) index =0;
					this.gotoPage(index)
				},
				
				addPage : function( json ){
					this.pageJSON.push(json);
					for( var key in json ){
						var item = json[key];
						item.dom.hide();
					}
					if( this.pageJSON.length <= 1 ){
						this.gotoPage(0,true)
					}
				},
				
				runSpirit : function( pageJSON,showANDend ){
					if( showANDend ){
						for( var key in pageJSON ){
							var item = pageJSON[key];
							(function(item){
								item.dom.addClass( item.showClass )
								item.dom.show();
								setTimeout(function(){
									item.dom.removeClass( item.showClass )
								},1000)
							})(item)
						}
						
					}else{
						for( var key in pageJSON ){
							var item = pageJSON[key];
							(function(item){
								item.dom.css({
									"-webkit-animation-duration" : item.duration+"s",
									"-webkit-animation-delay" : item.delay+"s"
								}).addClass( item.showEndClass )
								setTimeout(function(){
									item.dom.removeClass( item.showEndClass )
									item.dom.hide();
								},1000)
							})(item)
						}
					}
					
				}
				
				
			}
			
			var moveSlide = new _moveSlide();
			
			var page1Json = [
				{
					dom : $( ".swiper-slide1 .slide1-1" ),
					showClass : "animated fadeInRight",
					showEndClass : "animated bounceOutUp",
					delay : 0,
					duration : 0.8
				},
				{
					dom : $( ".swiper-slide1 .slide1-2" ),
					showClass : "animated fadeInDown",
					showEndClass : "animated bounceOutUp",
					delay : 0.2,
					duration : 0.8
				}
				,
				{
					dom : $( ".swiper-slide1 .slide1-title" ),
					showClass : "animated fadeInDown",
					showEndClass : "animated bounceOutUp",
					delay : 0.2,
					duration : 0.8
				}
			]
			moveSlide.addPage( page1Json )
			
			var page2Json = [
				{
					dom : $( ".swiper-slide2 .slide2-1" ),
					showClass : "animated fadeInRight",
					showEndClass : "animated fadeOutUp",
					delay : 0,
					duration : 0.8
				},
				{
					dom : $( ".swiper-slide2 .slide2-2" ),
					showClass : "animated fadeInDown",
					showEndClass : "animated fadeOutUp",
					delay : 0,
					duration : 0.8
				},
				{
					dom : $( ".swiper-slide2 .slide2-3" ),
					showClass : "animated fadeInDown",
					showEndClass : "animated fadeOutUp",
					delay : 0,
					duration : 0.8
				},
				{
					dom : $( ".swiper-slide2 .slide2-title" ),
					showClass : "animated fadeInDown",
					showEndClass : "animated fadeOutUp",
					delay : 0,
					duration : 0.8
				}
			]
			moveSlide.addPage( page2Json )
			
			var page3Json = [
				{
					dom : $( ".swiper-slide3 .slide3-1" ),
					showClass : "animated fadeInRight",
					showEndClass : "animated fadeOutUp",
					delay : 0,
					duration : 0.8
				},
				{
					dom : $( ".swiper-slide2 .slide3-2" ),
					showClass : "animated fadeInDown",
					showEndClass : "animated fadeOutUp",
					delay : 0,
					duration : 0.8
				},
				{
					dom : $( ".swiper-slide2 .slide3-3" ),
					showClass : "animated fadeInDown",
					showEndClass : "animated fadeOutUp",
					delay : 0,
					duration : 0.8
				},
				{
					dom : $( ".swiper-slide2 .slide3-title" ),
					showClass : "animated fadeInDown",
					showEndClass : "animated fadeOutUp",
					delay : 0,
					duration : 0.8
				}
			]
			moveSlide.addPage( page3Json )