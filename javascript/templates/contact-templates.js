var contactTemplates = {
  variants: {
    'about-en': '<ul>'+
      '<li><a href="mailto:addisoni18n@gmail.com">Addison Phillips (addisoni18n @ gmail.com)</a>, Internationalization Working Group Chair</li>'+
      '<li><a href="mailto:xfq@w3.org">Fuqiao Xue (xfq @ w3.org)</a>, Activity Lead; Staff Contact for Core Working Group</li>'+
      '<li><a href="mailto:ishida@w3.org">Richard Ishida (ishida @ w3.org)</a>, Distinguished Expert, Internationalisation; Language Enablement Lead</li>'+
      '<li><a href="mailto:duerst@it.aoyama.ac.jp">Martin Dürst (duerst @ it.aoyama.ac.jp)</a>, Interest Group Chair</li>'+
      '</ul>',

    'about-zh-hans': '<ul>'+
      '<li><a href="mailto:addisoni18n@gmail.com">Addison Phillips (addisoni18n @ gmail.com)</a>（国际化工作组主席）</li>'+
      '<li><a href="mailto:xfq@w3.org">薛富侨 (xfq @ w3.org)</a>（国际化标准计划负责人，工作组联系人）</li>'+
      '<li><a href="mailto:ishida@w3.org">Richard Ishida (ishida @ w3.org)</a>（国际化工作组联系人）</li>'+
      '<li><a href="mailto:duerst@it.aoyama.ac.jp">Martin Dürst (duerst @ it.aoyama.ac.jp)</a>（国际化兴趣组主席）</li>'+
      '</ul>',

    'languagedev-en': '<ul>'+
      '<li><a href="mailto:xfq@w3.org">Fuqiao Xue (xfq @ w3.org)</a>, Internationalization Lead; Internationalization Working Group Staff Contact</li>'+
      '<li><a href="mailto:ishida@w3.org">Richard Ishida (ishida @ w3.org)</a>, Distinguished Expert, Internationalisation; Language Enablement Lead</li>'+
      '<li><a href="mailto:addisoni18n@gmail.com">Addison Phillips (addisoni18n @ gmail.com)</a>, Internationalization Working Group Chair</li>'+
      '<li><a href="mailto:duerst@it.aoyama.ac.jp">Martin Dürst (duerst @ it.aoyama.ac.jp)</a>, Internationalization Interest Group Chair</li>'+
      '</ul>',

    'languagedev-zh-hans': '<ul>'+
      '<li><a href="mailto:ishida@w3.org">Richard Ishida (ishida @ w3.org)</a>，语言支持负责人</li>'+
      '<li><a href="mailto:xfq@w3.org">薛富侨 (xfq @ w3.org)</a>，国际化负责人、国际化工作组联络人</li>'+
      '<li><a href="mailto:addisoni18n@gmail.com">Addison Phillips (addisoni18n @ gmail.com)</a>，国际化工作组主席</li>'+
      '<li><a href="mailto:duerst@it.aoyama.ac.jp">Martin Dürst (duerst @ it.aoyama.ac.jp)</a>，国际化兴趣组主席</li>'+
      '</ul>',
  },

  render: function (targetId, variantName) {
    var target = document.getElementById(targetId);
    if (!target) return;
    if (!this.variants[variantName]) return;
    target.innerHTML = this.variants[variantName];
  }
};
