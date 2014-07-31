var AW_TEMPLATE = {
	'loadingBox':
		'<div id="aw-loading" class="hide">'+
			'<div id="aw-loading-box"></div>'+
		'</div>',
	
	'userCard':
			'<div id="aw-card-tips" class="aw-card-tips aw-card-tips-user">'+
				'<div class="aw-mod">'+
					'<div class="mod-head">'+
						'<a href="{{url}}" class="img">'+
							'<img src="{{avatar_file}}" alt="" />'+
						'</a>'+
						'<p class="title clearfix">'+
							'<a href="{{url}}" class="name pull-left" data-id="{{uid}}">{{user_name}}</a>'+
							'<i class="{{verified_enterprise}} pull-left" title="{{verified_title}}"></i>'+
						'</p>'+
						'<p class="aw-user-center-follow-meta">'+
							'<span>' + _t('威望') + ': <em class="aw-text-color-green">{{reputation}}</em></span>'+
							'<span>' + _t('赞同') + ': <em class="aw-text-color-orange">{{agree_count}}</em></span>'+
						'</p>'+
					'</div>'+
					'<div class="mod-body">'+
						'<p>{{signature}}</p>'+
					'</div>'+
					'<div class="mod-footer">'+
						'<span class="pull-right">'+
							'<a href="javascript:;" onclick="AWS.dialog(\'inbox\', \'{{user_name}}\');">' + _t('私信') + '</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:;" onclick="AWS.dialog(\'publish\', {category_enable:{{category_enable}}, ask_user_id:{{uid}}, ask_user_name:{{ask_name}} });">' + _t('问Ta') + '</a>'+
						'</span>'+
						'<a class="btn btn-mini btn-default focus {{focus}}" onclick="AWS.User.follow($(this), \'user\', {{uid}});">{{focusTxt}}</a>'+
					'</div>'+
				'</div>'+
			'</div>',
	
	'topicCard' : 
			'<div id="aw-card-tips" class="aw-card-tips aw-card-tips-topic">'+
				'<div class="aw-mod">'+
					'<div class="mod-head">'+
						'<a href="{{url}}" class="img">'+
							'<img src="{{topic_pic}}" alt="" title=""/>'+
						'</a>'+
						'<p class="title">'+
							'<a href="{{url}}" class="name" data-id="{{topic_id}}">{{topic_title}}</a>'+
						'</p>'+
						'<p>'+
							'{{topic_description}}'+
						'</p>'+
					'</div>'+
					'<div class="mod-footer">'+
						'<span class="pull-right">'+
							_t('问题数') + ' {{discuss_count}} • ' + _t('关注者') + ' {{focus_count}}'+
						'</span>'+
						'<a class="btn btn-mini btn-default focus {{focus}}" onclick="AWS.User.follow($(this), \'topic\', {{topic_id}});">{{focusTxt}}</a>'+
					'</div>'+
				'</div>'+
			'</div>',

	'alertBox' : 
			'<div class="modal fade alert-box aw-tips-box">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
							'<h3 class="modal-title" id="myModalLabel">' + _t('提示信息') + '</h3>'+
						'</div>'+
						'<div class="modal-body">'+
							'<p>{{message}}</p>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>',

	'imagevideoBox' : 
			'<div id="aw-image-box" class="modal fade alert-box aw-image-box">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
							'<h3 class="modal-title" id="myModalLabel">{{title}}</h3>'+
						'</div>'+
						'<div class="modal-body">'+
							'<form id="addTxtForms">'+
								'<p>' + _t('文字说明') + ':</p>'+
								'<input class="form-control" type="text" name="{{tips}}"/>'+
								'<p>' + _t('链接地址') + '</p>'+
								'<input class="form-control" type="text" value="http://" name="{{url}}" />'+
							'</form>'+
							'<p class="aw-text-color-999">{{type_tips}}</p>'+
						'</div>'+
						'<div class="modal-footer">'+
							'<a data-dismiss="modal" aria-hidden="true" class="btn">' + _t('取消') + '</a>'+
							'<button class="btn btn-large btn-success" data-dismiss="modal" aria-hidden="true" onclick="AWS.Editor.add_multimedia({{type}});">' + _t('确定') + '</button>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>',

	'editCommentBox' : 
				'<div class="modal fade alert-box aw-edit-comment-box">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
							'<h3 class="modal-title" id="myModalLabel">' + _t('编辑回复') + '</h3>'+
						'</div>'+
						'<form action="' + G_BASE_URL + '/question/ajax/update_answer/answer_id-{{answer_id}}" method="post" onsubmit="return false" id="answer_edit">'+
						'<div class="modal-body">'+
							'<div class="alert alert-danger hide error_message"><i class="fa fa-times"></i> <em></em></div>'+
							'<input type="hidden" name="attach_access_key" value="{{attach_access_key}}" />'+
							'<textarea name="answer_content" id="editor_reply" class="form-control" rows="10"></textarea>'+
							'<div class="aw-file-upload-box">'+
								'<div class="aw-upload-box">'+
									'<a class="btn btn-default">上传附件</a>'+
									'<div class="upload-container"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="modal-footer">'+
							'<span><input id="aw-do-delete" type="checkbox" value="1" name="do_delete" /><label for="aw-do-delete">' + _t('删除回复') + '</label></span>'+
							'<button class="btn btn-large btn-success" onclick="AWS.ajax_post($(\'#answer_edit\'), AWS.ajax_processer, \'ajax_post_alert\');return false;">' + _t('确定') + '</button>'+
						'</div>'+
						'</form>'+
					'</div>'+
				'</div>'+
			'</div>',

	'articleCommentBox' :
		'<div class="aw-article-replay-box clearfix">'+
			'<form action="'+ G_BASE_URL +'/article/ajax/save_comment/" onsubmit="return false;" method="post">'+
				'<div class="mod-body">'+
					'<input type="hidden" name="at_uid" value="{{at_uid}}">'+
					'<input type="hidden" name="post_hash" value="' + G_POST_HASH + '" />'+
					'<input type="hidden" name="article_id" value="{{article_id}}" />'+
					'<textarea placeholder="' + _t('写下你的评论...') + '" class="form-control" id="comment_editor" name="message" rows="2"></textarea>'+
				'</div>'+
				'<div class="mod-footer">'+
					'<a href="javascript:;" onclick="AWS.ajax_post($(this).parents(\'form\'));" class="btn btn-large btn-success pull-right btn-submit">' + _t('回复') + '</a>'+
				'</div>'+
			'</form>'+
		'</div>',

	'favoriteBox' : 
		'<div class="modal hide fade alert-box aw-favorite-box">'+
			'<div class="modal-dialog">'+
				'<div class="modal-content">'+
					'<div class="modal-header">'+
						'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
						'<h3 class="modal-title" id="myModalLabel">' + _t('收藏') + '</h3>'+
					'</div>'+
					'<form action="' + G_BASE_URL + '/favorite/ajax/update_favorite_tag/" method="post" onsubmit="return false;">'+
						'<div class="modal-body">'+
							'<input type="hidden" name="item_id" value="{{item_id}}" />'+
							'<input type="hidden" name="item_type" value="{{item_type}}" />'+
							'<div class="alert alert-danger hide error_message"><i class="fa fa-times"></i> <em></em></div>'+
							'<p>' + _t('添加话题标签') + ': <input type="text" name="tags" id="add_favorite_tags" class="form-control" /></p>'+
							'<p id="add_favorite_my_tags" class="hide">' + _t('常用标签') + ': </p>'+
						'</div>'+
						'<div class="modal-footer">'+
							'<a href="javascript:;" data-dismiss="modal" aria-hidden="true">' + _t('取消') + '</a>'+
							'<button href="javascript:;" class="btn btn-large btn-success" onclick="AWS.ajax_post($(this).parents(\'form\'), AWS.ajax_processer, \'ajax_post_modal\');">' + _t('确认') + '</button>'+
						'</div>'+
					'</form>'+
				'</div>'+
			'</div>'+
		'</div>',

	'questionRedirect' : 
		'<div class="modal fade alert-box aw-question-redirect-box">'+
			'<div class="modal-dialog">'+
				'<div class="modal-content">'+
					'<div class="modal-header">'+
						'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
						'<h3 class="modal-title" id="myModalLabel">' + _t('问题重定向至') + '</h3>'+
					'</div>'+
					'<div class="modal-body">'+
						'<p>' + _t('将问题重定向至') + '</p>'+
						'<div class="aw-question-drodpwon">'+
							'<input id="question-input" class="form-control" type="text" data-id="{{data_id}}" placeholder="' + _t('搜索问题') + '" />'+
							'<div class="aw-dropdown"><i class="aw-icon i-dropdown-triangle active"></i><p class="title">' + _t('没有找到相关结果') + '</p><ul class="aw-dropdown-list"></ul></div>'+
						'</div>'+
						'<p class="clearfix"><a href="javascript:;" class="btn btn-large btn-success pull-right" onclick="$(\'.alert-box\').modal(\'hide\');">' + _t('放弃操作') + '</a></p>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>',

	'publishBox' : 
			'<div class="modal fade alert-box aw-publish-box">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
							'<h3 class="modal-title" id="myModalLabel">' + _t('发起问题') + '</h3>'+
						'</div>'+
						'<div class="modal-body">'+
							'<div class="alert alert-danger hide error_message"><i class="fa fa-times"></i> <em></em></div>'+
							'<form action="' + G_BASE_URL + '/publish/ajax/publish_question/" method="post" id="quick_publish" onsubmit="return false">'+
								'<input type="hidden" id="quick_publish_category_id" name="category_id" value="{{category_id}}" />'+
								'<input type="hidden" name="post_hash" value="' + G_POST_HASH + '" />'+
								'<input type="hidden" name="ask_user_id" value="{{ask_user_id}}" />'+
								'<div>'+
									'<textarea class="form-control" placeholder="' + _t('写下你的问题') + '..." rows="1" name="question_content" id="quick_publish_question_content" onkeydown="if (event.keyCode == 13) { return false; }"></textarea>'+
									'<div class="aw-publish-suggest-question hide">'+
										'<p class="aw-text-color-999">你的问题可能已经有答案</p>'+
										'<ul class="aw-dropdown-list">'+
										'</ul>'+
									'</div>'+
								'</div>'+
								//'<p onclick="$(this).parents(\'form\').find(\'.aw-publish-box-supplement-content\').fadeIn().focus();$(this).hide();"><span class="aw-publish-box-supplement"><i class="aw-icon i-edit"></i>' + _t('补充说明') + ' »</span></p>'+
								'<textarea name="question_detail" class="form-control" rows="4" placeholder="' + _t('问题背景、条件等详细信息') + '..."></textarea>'+
								'<div class="aw-publish-title">'+
									'<div class="dropdown" id="quick_publish_category_chooser">'+
									'<div class="dropdown-toggle" data-toggle="dropdown">'+
										'<span id="aw-topic-tags-select" class="aw-hide-txt">' + _t('选择分类') + '</span>'+
										'<a><i class="fa fa-chevron-down"></i></a>'+
									'</div>'+
								'</div>'+
								'</div>'+
								'<div id="quick_publish_topic_chooser">'+
									'<span class="aw-topic-editor" data-type="publish">'+
									'<span class="aw-edit-topic"><i class="fa fa-edit"></i>' + _t('编辑话题') + '</span>'+
									'</span>'+
								'</div>'+
								'<div class="clearfix hide" id="quick_publish_captcha">'+
									'<input type="text" class="pull-left form-control" name="seccode_verify" placeholder="' + _t('验证码') + '" />'+
									'<img id="qp_captcha" class="pull-left" onclick="this.src = \'' +G_BASE_URL + '/account/captcha/\' + Math.floor(Math.random() * 10000);" src="" />'+
								'</div>'+
							'</form>'+
						'</div>'+
						'<div class="modal-footer">'+
							'<span class="pull-right">'+
								'<a data-dismiss="modal" aria-hidden="true">' + _t('取消') + '</a>'+
								'<button class="btn btn-large btn-success" onclick="AWS.ajax_post($(\'#quick_publish\'), AWS.ajax_processer, \'error_message\');">' + _t('发起') + '</button>'+
							'</span>'+
							'<a href="javascript:;" tabindex="-1" onclick="$(\'form#quick_publish\').attr(\'action\', \'' + G_BASE_URL + '/publish/\');document.getElementById(\'quick_publish\').submit();" class="pull-left">' + _t('高级模式') + '</a>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>',

	'inbox' :
			'<div class="modal fade alert-box aw-inbox">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
							'<h3 class="modal-title" id="myModalLabel">' + _t('新私信') + '</h3>'+
						'</div>'+
						'<div class="modal-body">'+
							'<div class="alert alert-danger hide error_message"> <i class="fa fa-times"></i> <em></em></div>'+
							'<form action="' + G_BASE_URL + '/inbox/ajax/send/" method="post" id="quick_publish" onsubmit="return false">'+
								'<input type="hidden" name="post_hash" value="' + G_POST_HASH + '" />'+
								'<input id="invite-input" class="form-control" type="text" placeholder="' + _t('搜索用户') + '" name="recipient" value="{{recipient}}" />'+
								'<div class="aw-dropdown">'+
									'<i class="aw-icon i-dropdown-triangle"></i>'+
									'<p class="title">' + _t('没有找到相关结果') + '</p>'+
									'<ul class="aw-dropdown-list">'+
									'</ul>'+
								'</div>'+
								'<textarea class="form-control" name="message" rows="3" placeholder="' + _t('私信内容...') + '"></textarea>'+
							'</form>'+
						'</div>'+
						'<div class="modal-footer">'+
							'<a data-dismiss="modal" aria-hidden="true">' + _t('取消') + '</a>'+
							'<button class="btn btn-large btn-success" onclick="AWS.ajax_post($(\'#quick_publish\'), AWS.ajax_processer, \'error_message\');">' + _t('发送') + '</button>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>',

	'shareBox' : 
			'<div class="modal fade alert-box aw-share-box">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
							'<h3 class="modal-title" id="myModalLabel">' + _t('分享') + '</h3>'+
						'</div>'+
						'<div class="modal-body clearfix">'+
							'<ul id="bdshare" class="bdshare_t bds_tools get-codes-bdshare">'+
							'{{#items}}'+
								'<li><a title="' + _t('分享到') + ' {{title}}" class="{{className}}"><i class="bds"></i>{{name}}</a></li>'+
							'{{/items}}'+
							'</ul>'+
							'<script type="text/javascript" src="http://bdimg.share.baidu.com/static/js/bds_s_v2.js?cdnversion=' + new Date().getHours() + '"></script>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>',
		
	'shareList' : [ //分享外网icon列表
		{'className':'bds_qzone','name':'QQ空间','title':'QQ空间'},
		{'className':'bds_tsina','name':'新浪微博','title':'新浪微博'},
		{'className':'bds_tqq','name':'腾讯微博','title':'腾讯微博'},
		{'className':'bds_baidu-zone','name':'百度空间','title':'百度空间'},
		{'className':'bds_t163','name':'网易微博','title':'网易微博'},
		{'className':'bds_tqf','name':'朋友网','title':'朋友网'},
		{'className':'bds_kaixin','name':'开心网','title':'开心网'},
		{'className':'bds_renren','name':'人人网','title':'人人网'},
		{'className':'bds_douban','name':'豆瓣网','title':'人人网'},
		{'className':'bds_taobao','name':'淘宝网','title':'淘宝网'},
		{'className':'bds_fbook','name':'Facebook','title':'Facebook'},
		{'className':'bds_twi','name':'Twitter','title':'Twitter'},
		{'className':'bds_ms','name':'Myspace','title':'Myspace'},
		{'className':'bds_deli','name':'Delicious','title':'Delicious'},
		{'className':'bds_linkedin','name':'linkedin','title':'linkedin'}
	],
	
	'editTopicBox' : 
		'<div class="aw-edit-topic-box form-inline">'+
			'<input type="text" class="form-control" id="aw_edit_topic_title" autocomplete="off"  placeholder="' + _t('创建或搜索添加新话题') + '...">'+
			'<a class="btn btn-large btn-success submit-edit">' + _t('添加') + '</a>'+
			'<a class="btn btn-large btn-default close-edit">' + _t('取消') + '</a>'+
			'<div class="aw-dropdown">'+
				'<i class="aw-icon i-dropdown-triangle active"></i>'+
				'<p class="title">' + _t('没有找到相关结果') + '</p>'+
				'<ul class="aw-dropdown-list">'+
				'</ul>'+
			'</div>'+
		'</div>',
			
	'ajaxData' :
		'<div class="modal fade alert-box aw-topic-edit-note-box aw-question-edit" aria-labelledby="myModalLabel" role="dialog">'+
			'<div class="modal-dialog">'+
				'<div class="modal-content">'+
					'<div class="modal-header">'+
						'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
						'<h3 class="modal-title" id="myModalLabel">{{title}}</h3>'+
					'</div>'+
					'<div class="modal-body">'+
						'{{data}}'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>',

	'commentBox' : 
			'<div class="aw-comment-box" id="{{comment_form_id}}">'+
				'<div class="aw-comment-list"><p align="center" class="aw-padding10"><i class="aw-loading"></i></p></div>'+
				'<form action="{{comment_form_action}}" method="post" onsubmit="return false">'+
					'<div class="aw-comment-box-main">'+
						'<textarea class="aw-comment-txt form-control" rows="2" name="message" placeholder="' + _t('评论一下') + '..."></textarea>'+
						'<div class="aw-comment-box-btn">'+
							'<span class="pull-right">'+
								'<a href="javascript:;" class="btn btn-mini btn-success" onclick="AWS.User.save_comment($(this));">' + _t('评论') + '</a>'+
								'<a href="javascript:;" class="btn btn-mini btn-default close-comment-box">' + _t('取消') + '</a>'+
							'</span>'+
						'</div>'+
					'</div>'+
				'</form>'+
				'<i class="i-dropdown-triangle"></i>'+
			'</div>',
			
	'commentBoxClose' : 
			'<div class="aw-comment-box" id="{{comment_form_id}}">'+
				'<div class="aw-comment-list"><p align="center" class="aw-padding10"><i class="aw-loading"></i></p></div>'+
				'<i class="i-dropdown-triangle"></i>'+
			'</div>',

	'dropdownList' : 
		'<div aria-labelledby="dropdownMenu" role="menu" class="aw-dropdown">'+
			'<i class="i-dropdown-triangle"></i>'+
			'<ul class="aw-dropdown-list">'+
			'{{#items}}'+
				'<li><a data-value="{{id}}">{{title}}</a></li>'+
			'{{/items}}'+
			'</ul>'+
		'</div>',

	'reportBox' :
			'<div class="modal fade alert-box aw-share-box aw-share-box-message aw-report-box" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
							'<h3 class="modal-title" id="myModalLabel">' + _t('举报问题') + '</h3>'+
						'</div>'+
						'<form id="quick_publish" method="post" action="' + G_BASE_URL + '/question/ajax/save_report/">'+
							'<input type="hidden" name="type" value="{{item_type}}" />'+
							'<input type="hidden" name="target_id" value="{{item_id}}" />'+
							'<div class="modal-body">'+
								'<div class="alert alert-danger hide error_message"><i class="fa fa-times"></i> <em></em></div>'+
								'<textarea class="form-control" name="reason" rows="5" placeholder="' + _t('请填写举报理由') + '..."></textarea>'+
							'</div>'+
							'<div class="modal-footer">'+
								'<a data-dismiss="modal" aria-hidden="true">' + _t('取消') + '</a>'+
								'<button class="btn btn-large btn-success" onclick="AWS.ajax_post($(\'#quick_publish\'), AWS.ajax_processer, \'error_message\');return false;">' + _t('提交') + '</button>'+
							'</div>'+
						'</form>'+
					'</div>'+
				'</div>'+
			'</div>',

	'searchDropdownListQuestions' : 
		'<li class="{{active}} question clearfix"><i class="icon-g-replay pull-left"></i><a class="aw-hide-txt pull-left" href="{{url}}">{{content}} </a><span class="pull-right aw-text-color-999">{{discuss_count}} ' + _t('个回复') + '</span></li>',
	'searchDropdownListTopics' : 
		'<li class="topic clearfix"><a href="{{url}}" class="aw-topic-name" data-id="{{topic_id}}"><span>{{name}}</span></a> <span class="pull-right aw-text-color-999">{{discuss_count}} ' + _t('个问题') + '</span></li>',
	'searchDropdownListUsers' : 
		'<li class="user clearfix"><a href="{{url}}"><img src="{{img}}" />{{name}}<span class="aw-hide-txt">{{intro}}</span></a></li>',
	'searchDropdownListArticles' : 
		'<li class="question clearfix"><a class="aw-hide-txt pull-left" href="{{url}}">{{content}} </a><span class="pull-right aw-text-color-999">{{comments}} ' + _t('条评论') + '</span></li>',
	'inviteDropdownList' :
		'<li class="user"><a data-url="{{url}}" data-id="{{uid}}" data-actions="{{action}}" data-value="{{name}}"><img class="img" src="{{img}}" />{{name}}</a></li>',
	'editTopicDorpdownList' : 
		'<li class="question"><a>{{name}}</a></li>',
	'questionRedirectList' : 
		'<li class="question"><a class="aw-hide-txt" onclick="AWS.ajax_request({{url}})">{{name}}</a></li>',
	'questionDropdownList' : 
		'<li class="question" data-id="{{id}}"><a class="aw-hide-txt" target="_blank" _href="{{url}}">{{name}}</a></li>',

	'inviteUserList' : 
		'<li>'+
			'<a class="pull-right btn btn-mini btn-default" onclick="disinvite_user($(this),{{uid}});$(this).parent().detach();">' + _t('取消邀请') + '</a>'+
			'<a class="aw-user-name" data-id="{{uid}}">'+
				'<img src="{{img}}" alt="" />'+
			'</a>'+
			'<span class="aw-text-color-666">{{name}}</span>'+
		'</li>',
	
	'voteBar' : 
		'<div class="aw-vote-bar pull-left">'+
			'<div class="vote-container">'+
				'<a class="aw-border-radius-5 {{up_class}}" href="javascript:;" onclick="AWS.User.agree_vote(this, \'{{user_name}}\', {{answer_id}})">'+
				'<i data-original-title="' + _t('赞同回复') + '" class="fa fa-thumbs-o-up active" data-toggle="tooltip" title="" data-placement="right"></i>'+
				'</a>'+
				'<em class="aw-border-radius-5 aw-vote-bar-count aw-hide-txt active">{{agree_count}}</em>'+
				'<a class="aw-border-radius-5 {{down_class}}" onclick="AWS.User.disagree_vote(this, \'{{user_name}}\', {{answer_id}})">'+
					'<i data-original-title="' + _t('对回复持反对意见') + '" class="fa fa-thumbs-o-down" data-toggle="tooltip" title="" data-placement="right"></i>'+
				'</a>'+
			'</div>'+
		'</div>',

	'educateInsert' :
			'<td class="e1" data-txt="{{school}}">{{school}}</td>'+
			'<td class="e2" data-txt="{{departments}}">{{departments}}</td>'+
			'<td class="e3" data-txt="{{year}}">{{year}} ' + _t('年') + '</td>'+
			'<td><a class="delete-educate">' + _t('删除') + '</a>&nbsp;&nbsp;<a class="edit-educate">' + _t('编辑') + '</a></td>',

	'educateEdit' : 
			'<td><input type="text" value="{{school}}" class="school form-control"></td>'+
			'<td><input type="text" value="{{departments}}" class="departments form-control"></td>'+
			'<td><select class="year edityear">'+
				'</select> ' + _t('年') + '</td>'+
			'<td><a class="delete-educate">' + _t('删除') + '</a>&nbsp;&nbsp;<a class="add-educate">' + _t('保存') + '</a></td>',

	'workInsert' : 
			'<td class="w1" data-txt="{{company}}">{{company}}</td>'+
			'<td class="w2" data-txt="{{jobid}}">{{work}}</td>'+
			'<td class="w3" data-s-val="{{syear}}" data-e-val="{{eyear}}">{{syear}} ' + _t('年') + ' ' + _t('至') + ' {{eyear}}</td>'+
			'<td><a class="delete-work">' + _t('删除') + '</a>&nbsp;&nbsp;<a class="edit-work">' + _t('编辑') + '</a></td>',

	'workEidt' : 
			'<td><input type="text" value="{{company}}" class="company form-control"></td>'+
			'<td>'+
				'<select class="work editwork">'+
				'</select>'+
			'</td>'+
			'<td><select class="syear editsyear">'+
				'</select>&nbsp;&nbsp;' + _t('年') + ' &nbsp;&nbsp; ' + _t('至') + '&nbsp;&nbsp;&nbsp;&nbsp;'+
				'<select class="eyear editeyear">'+
				'</select> ' + _t('年') +
			'</td>'+
			'<td><a class="delete-work">' + _t('删除') + '</a>&nbsp;&nbsp;<a class="add-work">' + _t('保存') + '</a></td>',

	'linkBox' : 
			'<div id="aw-link-box" class="modal alert-box aw-link-box fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">'+
				'<div class="modal-dialog">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
							'<h3 id="myModalLabel">{{title}}</h3>'+
						'</div>'+
						'<div class="modal-body">'+
							'<form id="addTxtForms">'+
								'<p>' + _t('链接文字') + '</p>'+
								'<input type="text" value="" name="{{text}}" class="link-title form-control" placeholder="'+ _t('链接文字') +'" />'+
								'<p>' + _t('链接地址') + ':</p>'+
								'<input type="text" name="{{url}}" class="link-url form-control" value="http://" />'+
							'</form>'+
						'</div>'+
						'<div class="modal-footer">'+
							'<a data-dismiss="modal" aria-hidden="true">' + _t('取消') + '</a>'+
							'<button class="btn btn-large btn-success" data-dismiss="modal" aria-hidden="true" onclick="AWS.Editor.add_multimedia({{type}});">' + _t('确定') + '</button>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>',
	'alertImg' :
		'<div class="modal fade alert-box aw-tips-box aw-alert-img-box">'+
			'<div class="modal-dialog">'+
				'<div class="modal-content">'+
					'<div class="modal-header">'+
						'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
						'<h3 class="modal-title" id="myModalLabel">' + _t('提示信息') + '</h3>'+
					'</div>'+
					'<div class="modal-body">'+
						'<p class="hide {{hide}}">{{message}}</p>'+
						'<img src="{{url}}" />'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>',

	'confirmBox' :
		'<div class="modal fade alert-box aw-confirm-box">'+
			'<div class="modal-dialog">'+
				'<div class="modal-content">'+
					'<div class="modal-header">'+
						'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
						'<h3 class="modal-title" id="myModalLabel">' + _t('提示信息') + '</h3>'+
					'</div>'+
					'<div class="modal-body">'+
						'{{message}}'+
					'</div>'+
					'<div class="modal-footer">'+
						'<a class="btn btn-default" data-dismiss="modal" aria-hidden="true">取消</a>'+
						'<a class="btn btn-success yes">确定</a>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>',

	// 后台分类移动设置
	'adminCategoryMove' :
		'<div class="modal fade alert-box aw-category-move-box">'+
			'<div class="modal-dialog">'+
				'<form method="post" id="settings_form" action="' + G_BASE_URL + '/admin/ajax/move_category_contents/">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
							'<h3 class="modal-title" id="myModalLabel">{{name}}</h3>'+
						'</div>'+
						'<div class="modal-body">'+
							'<div class="alert alert-danger hide error_message"></div>'+
							'<div class="row">'+
								'<div class="col-md-6 hide">'+
									'<select class="from-category form-control" name="from_id">'+
										'{{#items}}'+
											'<option value="{{id}}">{{title}}</option>'+
										'{{/items}}'+
									'</select>'+
								'</div>'+
								'<div class="col-md-12">'+
									'<select name="target_id" class="form-control">'+
										'{{#items}}'+
											'<option value="{{id}}">{{title}}</option>'+
										'{{/items}}'+
									'</select>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="modal-footer">'+
							'<a class="btn btn-default" aria-hidden="true" data-dismiss="modal">' + _t('取消') + '</a>'+
							'<a class="btn btn-success yes" onclick="AWS.ajax_post($(\'{{from_id}}\'), AWS.ajax_processer, \'error_message\')">' + _t('确定') + '</a>'+
						'</div>'+
					'</div>'+
				'</form>'+
			'</div>'+
		'</div>',

	// 后台微信群发消息弹窗
	'adminWechatSendMsg' :
		'<div class="modal fade alert-box aw-wechat-send-message">'+
			'<div class="modal-dialog">'+
				'<form method="post" id="settings_form" action="' + G_BASE_URL + '/admin/ajax/move_category_contents/">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
							'<h3 class="modal-title" id="myModalLabel">' + _t('搜索消息内容') + '</h3>'+
						'</div>'+
						'<div class="modal-body">'+
							'<div class="aw-dropdown-box">'+
								'<div class="alert alert-danger hide error_message"></div>'+
								'<input type="text" class="form-control search-input" />'+
								'<div class="aw-dropdown"><p class="title">' + _t('没有找到相关结果') + '</p><ul class="aw-dropdown-list"><li><a>123</a></li></ul></div>'+
							'</div>'+
						'</div>'+
						'<div class="modal-footer">'+
							'<a class="btn btn-default" aria-hidden="true" data-dismiss="modal">' + _t('取消') + '</a>'+
						'</div>'+
					'</div>'+
				'</form>'+
			'</div>'+
		'</div>'
}