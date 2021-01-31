const spans = document.querySelectorAll('h1 span');

spans.forEach(span => span.addEventListener('mouseover', function(e){
  span.classList.add('animated','rubberBand')
}));

spans.forEach(span => span.addEventListener('mouseout', function(e){
  span.classList.remove('animated','rubberBand')
}));

const htmlBar = document.querySelector('.bar-html');
const cssBar = document.querySelector('.bar-css');
const jsBar = document.querySelector('.bar-javascript');
const reactBar = document.querySelector('.bar-react');
const gitBar = document.querySelector('.bar-git');
const nodeBar = document.querySelector('.bar-node');

var t1 = new TimelineLite()

t1.fromTo(htmlBar, .55, {width:`calc(0% - 6px)`}, {width:`calc(90% - 6px)`, ease: Power4.easeOut})
  
  .fromTo(cssBar, .65, {width:`calc(0% - 6px)`}, {width:`calc(90% - 6px)`, ease:Power4.easeOut})

  .fromTo(jsBar, .65, {width:`calc(0% - 6px)`}, {width:`calc(80% - 6px)`, ease:Power4.easeOut})

  .fromTo(gitBar, .65, {width:`calc(0% - 6px)`}, {width:`calc(75% - 6px)`, ease:Power4.easeOut})

  .fromTo(reactBar, .65, {width:`calc(0% - 6px)`}, {width:`calc(75% - 6px)`, ease:Power4.easeOut})

  .fromTo(nodeBar, .65, {width:`calc(0% - 6px)`}, {width:`calc(5% - 6px)`, ease:Power4.easeOut})

 

  const contoller = new ScrollMagic.Controller()
  const scene = new ScrollMagic.Scene({
    triggerElement:'.skills',
    triggerHook: 0
  })

  .setTween(t1)
  .addTo(contoller)


  const works = document.querySelectorAll('.worky');
  const designs = document.querySelectorAll('.category-designing');

  function selectElement(e){
    removeActive();
    removeShow();

    this.classList.add('active');

    const content = document.querySelector(`#${this.id}-content`)

    content.classList.add('show');

  }
  function removeActive(){
  works.forEach(work => work.classList.remove('active'));
  }

  function removeShow(){
  designs.forEach(design => design.classList.remove('show'));
  }

  works.forEach(work => work.addEventListener('click', selectElement));

  



