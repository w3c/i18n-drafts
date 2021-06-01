// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'아랍어',
  'bg':'불가리아어',
  'da':'덴마크어',
  'de':'독일어',
  'el':'그리스어',
  'en':'영어',
  'es':'스페인어',
  'fr':'프랑스어',
  'he':'히브리어',
  'hi':'힌디어',
  'hu':'헝가리어',
  'it':'이탈리아어',
  'ja':'일본어',
  'ko':'한국어',
  'nl':'네덜란드어',
  'pl':'폴란드어',
  'pt':'포르투칼어',
  'pt-br':'포르투칼어',
  'ro':'루마니아어',
  'ru':'러시아어',
  'sv':'스웨덴어',
  'th':'태국어',
  'tr':'터키어',
  'uk':'우크라이나어',
  'vi':'베트남어',
  'zh-hans':'중국어 (간체)',
  'zh-hant':'중국어 (번체)',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "I18N 활동 홈"
s.moreResourcesOfThisType = "이 유형의 추가 리소스."
s.accessKeyN = '페이지 탐색에서 액세스 키를 n번 건너뜁니다. <a href="#contentstart">컨텐츠 시작 페이지로 건너뛰기</a>'
s.examplesInAnotherScript = "이 문서에는 다른 언어/스크립트 예제가 들어 있습니다."
s.worldMap = "세계지도"
s.searchI18nSite = "I18n 사이트 검색" 
s.translationDisclaimer = '이 문서는 번역본입니다. 일치하지 않는 사항이나 오류가 있는 경우에는 <a href="'+f.filename+'.en">최신 영문 원본</a> 을 참고하십시오. <a href="#copyright">원본 저작권</a> 은 아래와 같이 W3C에게 있습니다.'
s.translator = "번역:"
s.relatedLinks = "관련 링크"
s.articles = "Articles" // used in breadcrumbs, top right of page 
s.topicIndexText = "항목 색인"
s.techIndexText = "기술 색인"
s.gotoW3cHome = "W3C 홈 페이지로 이동"
s.gotoI18nHome = "국제화 활동 홈 페이지로 이동"
s.internationalizationTitle = "국제화"
s.worldwide = "전세계의 월드 와이드 웹으로 만들기!"
s.i18nActivityHomePage = "국제화 활동 홈 페이지."
s.home = "홈"
s.contactI18nActivity = "W3C 국제화에 대한 도움 받기"
s.contact = "연착처"
s.aboutI18nActivity = "About W3C Internationalization."
s.about = "About"
s.askI18nActivity = "Ask for help or information."
s.ask = "Ask"
s.groupsThatMakeUp = "W3C 국제화 작업에 참여하기"
s.groups = "참여하기"
s.topicIndexForInformation = "사이트에서 검색하기"
s.topics = "검색하기"
s.taskBasedIndex = "국제화를 위한 요구사항과 기술에 대해 배우기"
s.techniques = "배우기"
s.informationResources = "이 사이트에서 정보 찾기"
s.resources = "찾기"
s.newsFiltersAndFeeds = "W3C 국제화 작업 팔로우하기"
s.news = "팔로우"
s.onThisPage = "이 페이지의 내용"
s.questionAlt = "질문"
s.questionLink = "질문"
s.question = "질문"
s.backgroundAlt = "배경 정보"
s.backgroundLink = "배경"
s.background = "배경"
s.answer = "답변" // heading
s.answerAlt = "답변"
s.answerLink = "답변"
s.byTheWayAlt = "유용한 추가 정보"
s.byTheWayLink = "기타"
s.byTheWay = "기타"
s.furtherReadingAlt = "추가 정보"
s.furtherReadingLink = "추가 정보"
s.furtherReading = "추가 정보"
s.intendedAudience = "대상자:"
s.skipToAnswer = "[답변으로 건너뛰기]"
s.tellUsWhatYouThink = "의견을 알려 주십시오(영어로)."
s.sendAComment = "의견 보내기"
s.subscribeToRSS = "RSS feed에 가입합니다."
s.newResourcesAlt = "새로운 리소스가 처음 게시될 때마다 알립니다."
s.newResources = "새 리소스"
s.homePageNewsAlt = "홈 페이지에 표시되는 모든 뉴스 항목을 확인할 수 있습니다."
s.homePageNews = "홈 페이지 뉴스"
s.followOurNews = "Follow our news feed."
s.sentenceDelimiter = "."

s.author = "작성한 사람:" // followed by name of author(s)
s.previousAuthors = "이전에 작성한 사람:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "내용을 변경한 사람:" // person's name appears after colon
s.translatedBy = "번역:"
s.validXHTML = "Valid XHTML 1.0!"
s.validCSS = "유효한 CSS!"
s.codedInUtf8 = "UTF-8로 인코딩됨!"

s.translatedFromEnglishVer = dt.enVersion+" 기준 영어 컨텐츠를 번역한 것입니다. "+dt.thisVersionPlain+" GMT에 번역본이 마지막으로 변경되었습니다."

s.historyOfDocumentChanges = 'For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">Github commit list</a> for all changes since Jan 2016.'
s.untranslatedChanges = '<strong>Note:</strong> Changes have been made to <a href="'+f.filename+'.en">the English original</a> since this document was translated. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.'
s.unlinkedTranslation = '<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="'+f.filename+'.en">the English version</a> until this translation has been updated.'
s.new="New"// placed alongside new articles at http://www.w3.org/International/articlelist 
s.updated="Updated" // same as New
s.translation_updated="Translation updated:" // date appears after colon 

s.aboutThisArticle="이 문서 정보" // title in the right column near the top of the page
s.status_draft="이 문서는 아직 공개 검토를 거치지 않은 초안 자료입니다. 저희가 확인해야 할 사항이 있으면 페이지 하단에 있는 링크를 사용하여 피드백을 보내 주십시오."
s.status_review="이 문서는 현재 공개 검토 중에 있습니다. 의견이 있으시면 <a href='mailto:www-international@w3.org?subject=%5Breview%20feedback%5D%20$filename'>www-international@w3.org</a><span class='noprint'> (<a href='http://lists.w3.org/Archives/Public/www-international/'>구독</a>)로 보내 주십시오.</span>."
s.status_published="이 문서는 W3C Internationalization Working Group에서 검토하였으며, 가능한 한 정확성을 유지하기 위해 공개 검토 과정을 거쳤습니다. 저희가 확인해야 할 사항이 있으면 페이지 하단에 있는 링크를 사용하여 피드백을 보내 주십시오."
s.status_notreviewed="이 문서는 공개 검토 없이 게시되었습니다. 저희가 확인해야 할 사항이 있으면 페이지 하단에 있는 링크를 사용하여 피드백을 보내 주십시오."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.longeranswer = "Details" // heading that follows 'Quick answer'
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included:" // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location
s.githubRedirect = "<strong>NOTE!</strong> &nbsp; This is only an editor\'s draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>version on the W3C site</a>." // used for github-based versions of published articles

s.lastChanged = "최종 변경일 "
