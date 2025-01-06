// all Question :
const allQuestions = [
    {
        question: '1- اولین دبیرکل سازمان اوپک از کدام کشور انتخاب شد؟',
        option: ['ایران', 'آمریکا', 'چین', 'انگلیس'],
        trueOption: 'ایران'
    },
    {
        question: '2- در چه فاصله ای از پیچ ها دور زدن ممنوع است؟',
        option: ['100 متری', '105 متری', '150 متری', '200 متری'],
        trueOption: '150 متری'
    },
    {
        question: '3- در چند متری ورودی تونل ها سبقت ممنوع است؟',
        option: ['100 متر', '130 متر', '150 متر', '180 متر'],
        trueOption: '100 متر'
    },
    {
        question: '4- مهمترین عامل دیابت کدام است؟',
        option: ['کم تحرکی', 'پرخوری', 'چاقی', 'هیچ کدام'],
        trueOption: 'چاقی'
    },
    {
        question: '5- اولین انتخابات سراسری در ایران چند روز پس از پیروزی انقلاب اسلامی برگزار شد؟',
        option: ['40 روز', '50 روز', '80 روز', '100 روز'],
        trueOption: '50 روز'
    },
    {
        question: '6- دروازه بان اجازه ندارد توپ را بیشتر از چند ثانیه در اختیار داشته باشد؟',
        option: ['6 ثانیه', '8 ثانیه', '10 ثانیه', '12 ثانیه'],
        trueOption: '6 ثانیه'
    },
    {
        question: '7- حداقل سرعت در آزادراه ها چقدر است؟',
        option: ['60 کیلومتر بر ساعت', '70 کیلومتر بر ساعت', '80 کیلومتر بر ساعت', '90 کیلومتر بر ساعت'],
        trueOption: '70 کیلومتر بر ساعت'
    },
    {
        question: '8- اگر دو برابر ثلث عددی برابر ۲۰ باشد، آن عدد چند است؟',
        option: ['20', '30', '40', '50'],
        trueOption: '30'
    },
    {
        question: '9- کاخ الحمرا در کدام کشور قرار دارد؟',
        option: ['آمریکا', 'هند', 'اسپانیا', 'چین'],
        trueOption: 'اسپانیا'
    },
    {
        question: '10- به تغییر حالت ماده از جامد به گاز بدون تغییر به حالت مایع چه می گویند؟',
        option: ['تصعید', 'تبخیر', 'میعان', 'هیج کدام'],
        trueOption: 'تصعید'
    },
    {
        question: '11- دیوار برلین به عنوان نماد جنگ سرد چند سال دوام آورد؟',
        option: ['22 سال', '24 سال', '26 سال', '28 سال'],
        trueOption: '28 سال'
    },
    {
        question: '12- کدام سلسله پادشاهی ایران را از دست حکومت یونانیان پس گرفت؟',
        option: ['سلجوقیان', 'اشکانیان', 'ساسانیان', 'هخامنشیان'],
        trueOption: 'اشکانیان'
    },
    {
        question: '13- خاقانی در چه قرنی می زیست؟',
        option: ['پنج', 'شش', 'هفت', 'هشت'],
        trueOption: 'شش'
    },
    {
        question: '14- چند درصد بدن انسان آب است؟',
        option: ['65 درصد', '75 درصد', '85 درصد', '90 درصد'],
        trueOption: '75 درصد'
    },
    {
        question: '15- دهان انسان بطور متوسط روزانه چند لیتر بزاق تولید می کند؟',
        option: ['نیم لیتر', 'یک لیتر', 'یک و نیم لیتر', 'دو لیتر'],
        trueOption: 'یک لیتر'
    },
    {
        question: '16- شخصی گفت: ” دیروز اگر فردا بود امروز یکشنبه بود. این شخص چه روزی این حرف را زده است؟',
        option: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه'],
        trueOption: 'سه شنبه'
    },
    {
        question: '17- مقبره حضرت دانیال در کدام شهر است؟',
        option: ['شوش', 'شهر ری', 'کاشان', 'گلستان'],
        trueOption: 'شوش'
    },
    {
        question: '18- کدام حیوان ریه ندارد و نمی خوابد؟',
        option: ['هزارپا', 'سوسک', 'مورجه', 'جغد'],
        trueOption: 'مورجه'
    },
    {
        question: '19- اندازه تقریبی مریخ چند برابر کره زمین است؟',
        option: ['یک چهارم زمین', 'یک سوم زمین', 'نصف زمین', 'هیج کدام'],
        trueOption: 'نصف زمین'
    },
    {
        question: '20- هر بازی هاکی روی یخ در چند ست برگزار می شود؟',
        option: ['2 ست', '3 ست', '4 ست', '5 ست'],
        trueOption: '3 ست'
    },
]


const firstSection = document.querySelector('#first-section')
const btnMenu = document.querySelectorAll('#menu>button')
const secondSection = document.querySelector('#second-section')
const startTestBtn = document.querySelector('#start-test')
const lastQuestion = document.querySelector('#last-question')
const timer = document.querySelector('#timer')
const questionP = document.querySelector('#question-p')
const questionItem = document.querySelectorAll('.question-item')
const firstQuestion = document.querySelector('#first-question')
const nextQuestionBtn = document.querySelector('#next-question')


const question = []
const userSelect = []
let countQuestion = 0
let step = 0
let intervalId = null


btnMenu.forEach(btn => {
    btn.addEventListener('click', () => {
        btnMenu.forEach(btn => {
            if (btn.classList.contains('bg-gray-900')) {
                btn.classList.remove('bg-gray-900')
                btn.classList.remove('text-white')
            }
        })

        btn.classList.add('bg-gray-900')
        btn.classList.add('text-white')
        countQuestion = btn.innerText
    })
})


startTestBtn.addEventListener('click', () => {
    if (countQuestion != 0) {
        firstSection.style.transform = 'scale(0)'
        setTimeout(() => {
            firstSection.classList.add('hidden')
            secondSection.classList.remove('hidden')
        }, 1000)
        checkData()
    } else {
        swal("تعداد سوالات را مشخص نمایید !", "", 'warning')
    }
})


function setTimer() {
    clearInterval(intervalId)
    timer.innerText = 15

    intervalId = setInterval(() => {
        timer.innerText--
        if (timer.innerText < 1) {
            clearInterval(intervalId)
            nextQuestionBtn.classList.add('opacity-0')

            let selectedOption = null
            questionItem.forEach(item => {
                if (item.classList.contains('border-infoColor')) {
                    selectedOption = item.innerText
                }
            })

            let correctOption = question[step].trueOption

            if (!selectedOption) {
                questionItem.forEach(option => {
                    if (option.innerText === correctOption) {
                        option.classList.add('border-green-600')
                        option.classList.add('text-green-600')
                    }
                })

                setTimeout(() => {
                    if (step < question.length - 1) {
                        step++
                        firstQuestion.innerText++
                        resetQuestionItem()
                        setQuestion()
                        setTimer()
                    } else {
                        secondSection.style.transition = '1s'
                        secondSection.style.transform = 'scale(0)'
                        setTimeout(() => {
                            secondSection.classList.add('hidden')
                            showResult()
                        }, 1000)
                    }
                }, 2000)
            } else {
                if (step < question.length - 1) {
                    step++
                    firstQuestion.innerText++
                    resetQuestionItem()
                    setQuestion()
                    setTimer()
                } else {
                    secondSection.style.transition = '1s'
                    secondSection.style.transform = 'scale(0)'
                    setTimeout(() => {
                        secondSection.classList.add('hidden')
                        showResult()
                    }, 1000)
                }
            }
        }
    }, 1000)
}


function checkData() {
    for (let i = 0; i < countQuestion; i++) {
        question.push(allQuestions[i])
    }
    lastQuestion.innerText = countQuestion
    setTimer()
    setQuestion()
}


function setQuestion() {
    questionP.innerText = question[step].question
    questionItem[0].innerText = question[step].option[0]
    questionItem[1].innerText = question[step].option[1]
    questionItem[2].innerText = question[step].option[2]
    questionItem[3].innerText = question[step].option[3]
}


questionItem.forEach(item => {
    item.addEventListener('click', () => {
        resetQuestionItem()
        item.classList.add('border-infoColor')
        nextQuestionBtn.classList.remove('opacity-0')
    })
})


function resetQuestionItem() {
    questionItem.forEach(item => {
        if (item.classList.contains('border-infoColor') || item.classList.contains('border-green-600') || item.classList.contains('border-red-600')) {
            item.classList.remove('border-infoColor')
            item.classList.remove('border-green-600')
            item.classList.remove('text-green-600')
            item.classList.remove('border-red-600')
            item.classList.remove('text-red-600')
        }
    })
}


nextQuestionBtn.addEventListener('click', () => {
    let selectedOption
    questionItem.forEach(item => {
        if (item.classList.contains('border-infoColor')) {
            selectedOption = item.innerText
        }
    })
    userSelect.push(selectedOption)

    let correctOption = question[step].trueOption

    questionItem.forEach(option => {
        if (option.innerText === correctOption) {
            option.classList.add('border-green-600')
            option.classList.add('text-green-600')
        }

        if (option.innerText === selectedOption) {
            if (selectedOption === correctOption) {
                option.classList.remove('border-infoColor')
                option.classList.add('border-green-600')
                option.classList.add('text-green-600')
            } else {
                option.classList.add('border-red-600')
                option.classList.add('text-red-600')
            }
        }
    })

    setTimeout(() => {
        if (step < question.length - 1) {
            nextQuestionBtn.classList.add('opacity-0')
            step++
            firstQuestion.innerText++
            resetQuestionItem()
            setQuestion()
            setTimer()
        } else {
            secondSection.style.transition = '1s'
            secondSection.style.transform = 'scale(0)'
            setTimeout(() => {
                secondSection.classList.add('hidden')
                showResult()
            }, 1000)
        }
    }, 1000)
})


function showResult() {
    let correctAnswers = 0
    for (let i = 0; i < question.length; i++) {
        if (userSelect[i] === question[i].trueOption) {
            correctAnswers++
        }
    }

    if (correctAnswers === 0) {
        swal(`تعداد پاسخ های صحیح شما ${correctAnswers} از ${question.length} است!`, "", "error")
    } else {
        swal(`تعداد پاسخ های صحیح شما ${correctAnswers} از ${question.length} است!`, "", "success")
    }

    setTimeout(() => {
        location.reload()
    }, 2500)
}