(function() {

  var doc = document.body;

  var container = document.createElement("div");

  var hdr = document.createElement("header");
  var h4h = document.createElement("h4");

  var ftr = document.createElement("footer");
 

  var cont = document.createElement("div");
  var form = document.createElement("form");
  var ol = document.createElement("ol");
  var lians1 = document.createElement("li");
  var lians2 = document.createElement("li");
  var lians3 = document.createElement("li");

  var ul1 = document.createElement("ul");
  var ul2 = document.createElement("ul");
  var ul3 = document.createElement("ul");

  var li1x1 = document.createElement("li");
  var li1x2 = document.createElement("li");
  var li1x3 = document.createElement("li");
  var li2x1 = document.createElement("li");
  var li2x2 = document.createElement("li");
  var li2x3 = document.createElement("li");
  var li3x1 = document.createElement("li");
  var li3x2 = document.createElement("li");
  var li3x3 = document.createElement("li");
 
  var button = document.createElement("button");

  var h4hText = document.createTextNode(page.header);
  var lians1Text = document.createTextNode(page.div1.form.ol.li0);
  var lians2Text = document.createTextNode(page.div1.form.ol.li1);
  var lians3Text = document.createTextNode(page.div1.form.ol.li2);

  var li1x1Text = document.createTextNode(page.div1.form.ol.ul0.li01);
  var li1x2Text = document.createTextNode(page.div1.form.ol.ul0.li02);
  var li1x3Text = document.createTextNode(page.div1.form.ol.ul0.li03);

  var li2x1Text = document.createTextNode(page.div1.form.ol.ul1.li11);
  var li2x2Text = document.createTextNode(page.div1.form.ol.ul1.li12);
  var li2x3Text = document.createTextNode(page.div1.form.ol.ul1.li13);

  var li3x1Text = document.createTextNode(page.div1.form.ol.ul2.li21);
  var li3x2Text = document.createTextNode(page.div1.form.ol.ul2.li22);
  var li3x3Text = document.createTextNode(page.div1.form.ol.ul2.li23);

  var input1x1 = document.createTextNode(page.div1.form.ol.ul0.li01.input01);

  var buttonText = document.createTextNode(page.div1.form.button);

  var input1x1 = document.createElement('input');
  var input1x2 = document.createElement('input');
  var input1x3 = document.createElement('input');
  var input2x1 = document.createElement('input');
  var input2x2 = document.createElement('input');
  var input2x3 = document.createElement('input');
  var input3x1 = document.createElement('input');
  var input3x2 = document.createElement('input');
  var input3x3 = document.createElement('input');

  var label1x1 = document.createElement('label');
  var label1x2 = document.createElement('label');
  var label1x3 = document.createElement('label');
  var label2x1 = document.createElement('label');
  var label2x2 = document.createElement('label');
  var label2x3 = document.createElement('label');
  var label3x1 = document.createElement('label');
  var label3x2 = document.createElement('label');
  var label3x3 = document.createElement('label');

  input1x1.type = 'checkbox';
  input1x2.type = 'checkbox';
  input1x3.type = 'checkbox';
  input2x1.type = 'checkbox';
  input2x2.type = 'checkbox';
  input2x3.type = 'checkbox';
  input3x1.type = 'checkbox';
  input3x2.type = 'checkbox';
  input3x3.type = 'checkbox';

  input1x1.id = 'answer1';
  input1x2.id = 'answer2';
  input1x3.id = 'answer3';
  input2x1.id = 'answer4';
  input2x2.id = 'answer5';
  input2x3.id = 'answer6';
  input3x1.id = 'answer7';
  input3x2.id = 'answer8';
  input3x3.id = 'answer9';
  
  label1x1.setAttribute("for", "answer1");
  label1x2.setAttribute("for", "answer2");
  label1x3.setAttribute("for", "answer3");
  label2x1.setAttribute("for", "answer4");
  label2x2.setAttribute("for", "answer5");
  label2x3.setAttribute("for", "answer6");
  label3x1.setAttribute("for", "answer7");
  label3x2.setAttribute("for", "answer8");
  label3x3.setAttribute("for", "answer9");


  container.setAttribute("class", "container");
  hdr.setAttribute("class", "header");
  h4h.setAttribute("class", "text-center");
  cont.setAttribute("class", "content");
  ol.setAttribute("class", "list-group");
  ul1.setAttribute("class", "list-unstyled checkbox");
  ul2.setAttribute("class", "list-unstyled checkbox");
  ul3.setAttribute("class", "list-unstyled checkbox");

  li1x1.setAttribute("class", "form-check");
  li1x2.setAttribute("class", "form-check");
  li1x3.setAttribute("class", "form-check");
  li2x1.setAttribute("class", "form-check");
  li2x2.setAttribute("class", "form-check");
  li2x3.setAttribute("class", "form-check");
  li3x1.setAttribute("class", "form-check");
  li3x2.setAttribute("class", "form-check");
  li3x3.setAttribute("class", "form-check");

  

  button.setAttribute("type", "submit");
  button.setAttribute("class", "btn btn-default center-block btn-lg");
  ftr.setAttribute("class", "footer");

  h4h.appendChild(h4hText);
  lians1.appendChild(lians1Text);
  lians2.appendChild(lians2Text);
  lians3.appendChild(lians3Text);

  li1x1.appendChild(label1x1);
  li1x2.appendChild(label1x2);
  li1x3.appendChild(label1x3);
  li2x1.appendChild(label2x1);
  li2x2.appendChild(label2x2);
  li2x3.appendChild(label2x3);
  li3x1.appendChild(label3x1);
  li3x2.appendChild(label3x2);
  li3x3.appendChild(label3x3);

  label1x1.appendChild(li1x1Text);
  label1x2.appendChild(li1x2Text);
  label1x3.appendChild(li1x3Text);
  label2x1.appendChild(li2x1Text);
  label2x2.appendChild(li2x2Text);
  label2x3.appendChild(li2x3Text);
  label3x1.appendChild(li3x1Text);
  label3x2.appendChild(li3x2Text);
  label3x3.appendChild(li3x3Text);

  label1x1.insertBefore(input1x1, li1x1Text);
  label1x2.insertBefore(input1x2, li1x2Text);
  label1x3.insertBefore(input1x3, li1x3Text);
  label2x1.insertBefore(input2x1, li2x1Text);
  label2x2.insertBefore(input2x2, li2x2Text);
  label2x3.insertBefore(input2x3, li2x3Text);
  label3x1.insertBefore(input3x1, li3x1Text);
  label3x2.insertBefore(input3x2, li3x2Text);
  label3x3.insertBefore(input3x3, li3x3Text);


  button.appendChild(buttonText);

  ul1.appendChild(li1x1);
  ul1.appendChild(li1x2);
  ul1.appendChild(li1x3);

  ul2.appendChild(li2x1);
  ul2.appendChild(li2x2);
  ul2.appendChild(li2x3);

  ul3.appendChild(li3x1);
  ul3.appendChild(li3x2);
  ul3.appendChild(li3x3);
  
  lians1.appendChild(ul1);
  lians2.appendChild(ul2);
  lians3.appendChild(ul3);

  ol.appendChild(lians1);
  ol.appendChild(lians2);
  ol.appendChild(lians3);

  form.appendChild(ol);
  cont.appendChild(form);

  container.appendChild(hdr);
  container.appendChild(cont);
  container.appendChild(ftr);

  hdr.appendChild(h4h);
  form.appendChild(button);

  doc.appendChild(container);



}) ();
