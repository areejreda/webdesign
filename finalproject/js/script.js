

//up arrow
var topIcon = document.getElementById('upArrow');

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 300)
        topIcon.classList.remove('d-none');
    else
        topIcon.classList.add('d-none');
});

//js counter
var done = false;
window.addEventListener('scroll', () => {
    if (window.scrollY > 450 && !done) {
        done = true;
        startCount("counter1", 8000, 50);
        startCount("counter2", 810, 58);
        startCount("counter3", 2000, 50);
        startCount("counter4", 20, 250);
    }
});

function startCount(id, target, time) {
  var counter = document.getElementById(id);
  if (!counter) return; 

  var i = 0;
  var step = Math.ceil(target * 0.01);

  var stop = setInterval(() => {
    i += step;
    if (i >= target) {
      counter.innerText = target;
      clearInterval(stop);
    } else {
      counter.innerText = i;
    }
  }, time);
}

// ourWork
function mouseEnter(element){
    element.classList.add('text-primary');
}

function mouseLeave(element){
    if (!element.classList.contains('selected')) {
        element.classList.remove('text-primary');
    }
}

function handleMouseEvent(element , type){
    if (type == 'mouseenter') {
        mouseEnter(element);
    } else if (type == 'mouseleave') {
        mouseLeave(element);
    }
}
function primary(li) {
    var mul = document.querySelectorAll("#myul li");

    for (var i = 0; i < mul.length; i++) {
        mul[i].classList.remove("text-primary");
        mul[i].classList.remove("selected");
    }

    li.classList.add("text-primary");
    li.classList.add("selected");
}

  function handleFilter(category) {
  let cards = document.querySelectorAll('.filter-cards');

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const filterValue = card.getAttribute('data-filter');

    if (!filterValue) {
      card.classList.add('d-none');
      continue;
    }

    let filters = filterValue

    if (category === 'all' || filters.includes(category)) {
      card.classList.remove('d-none');
    } else {
      card.classList.add('d-none');
    }
  }
}




// testimonial
if (document.querySelector('.owl-carousel')) {
  $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items : 2 ,
    margin: 30,
    loop:true,
    nav : true,
    autoplay: true,
    autoplayTimeout:3000,
    responsive: {
         0:{
            items:1
        },
        992:{
            items:2
        }
    },
    navText : [ '<i class="fa-solid fa-arrow-left text-white bg-primary me-4 fs-2 align-item-center "></i>' , '<i class="fa-solid fa-arrow-right text-white bg-primary align-item-center fs-2"></i>' ]
  });
})};

// form validation
let mform = document.getElementById('mform')

let handleError = (element, msg = "") => {
  element.nextElementSibling.innerText = msg
}

let nameValidation = (element) => {
  let value = element.value.trim()
  if (value.length < 3) handleError(element, "Enter at least 3 characters")
  else handleError(element)
}

let emailValidation = (element) => {
  let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!regExp.test(element.value.trim())) {
    handleError(element, "Please enter a valid email")
  } else {
    handleError(element)
  }
}

let subjectValidation = (element) => {
  if (element.value.trim() === "") {
    handleError(element, "Subject is required")
  } else {
    handleError(element)
  }
}

let messageValidation = (element) => {
  if (element.value.trim() === "") {
    handleError(element, "Message is required")
  } else {
    handleError(element)
  }
}

mform.addEventListener('input', function (e) {
  if (e.target.id === "name") nameValidation(e.target)
  else if (e.target.id === "email") emailValidation(e.target)
  else if (e.target.id === "subject") subjectValidation(e.target)
  else if (e.target.id === "message") messageValidation(e.target)
})


mform.addEventListener('submit', function (e) {
  e.preventDefault()

  let name = document.getElementById('name')
  let email = document.getElementById('email')
  let subject = document.getElementById('subject')
  let message = document.getElementById('message')

  nameValidation(name)
  emailValidation(email)
  subjectValidation(subject)
  messageValidation(message)

  let errors = mform.querySelectorAll('.text-danger')
  let hasError = false
  errors.forEach(error => {
    if (error.innerText !== "") hasError = true
  })

  if (!hasError) {
    mform.reset()
    errors.forEach(e => e.innerText = "")
  }
})

