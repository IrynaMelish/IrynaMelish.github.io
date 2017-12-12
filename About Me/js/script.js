$(function() {

    var html = $('#test').html();
    var pageData =
      {
        name: "Меліш Ірина Романівна",
        photo: "img/Photo.png",
        description: "Магістр з міжнародної економіки, менеджер з постачання",
        reason: ['Бути професіоналом у створенні цікавих динамічних сайтів', 'Постійно навчатися новому та розвиватися', 'Спілкуватися з цікавими людьми та працювати над різноманітними проектами'],
       
        phone: "+380956333565",
        facebook: "https://www.facebook.com/profile.php?id=100006181216003",
        facebookText: "My page at Facebook",
       
        feedBack: "Допоможу пізнати ази фортепіанного мистецтва у доступній формі!"
      };

    var content = tmpl(html, { data: pageData });

    $('body').append(content);

});
