let inputContent = document.querySelector('input')
const exePorgram = document.querySelector('.execute-program')
const clear = document.querySelector('.clear')
const copy = document.querySelector('.copy')
const result =document.querySelector('.result') 
const tooltip = document.querySelector('.tooltip') 

const process = () =>{
  exePorgram.addEventListener('click' , (event) =>{
    try {
      if(inputContent.value === '') throw 'Input is empty !'
      

      if(event.target.classList.contains('text-binary')){
        if(!isNaN(parseInt(inputContent.value))) throw 'Enter text value !'

        document.querySelector('.result').textContent ='' 

        let input = inputContent.value.split('')
        input.map((item)=> {
          let word = item.charCodeAt().toString(2)
          word = (word.length > 8) ? word.padStart(16 , 0) : word.padStart(8 , 0)
          result.textContent += word + " "
        })

        document.querySelector('input').value = ''
      }


      if(event.target.classList.contains('binary-text')){
        if(isNaN(parseInt(inputContent.value))) throw 'Enter binary value !'
        if(inputContent.value.includes(2 || 3 || 4 || 5 || 6 || 7 || 8 || 9)) throw 'Enter binary value'    

        document.querySelector('.result').textContent = ''

        let input = inputContent.value.trim().split(' ')
        input.forEach((item) => {
          result.textContent += String.fromCharCode(parseInt(item , 2)) 
        })
        
        document.querySelector('input').value = ''
      }
    } catch (error) {
      alert(error)
    }
  })

  clear.addEventListener('click' , () => {
    document.querySelector('.result').textContent = ''
    document.querySelector('input').value = ''
  })

  copy.addEventListener('click' , () => {
    document.querySelector('.result').select()
    document.querySelector('.result').setSelectionRange(0,99999)
    document.execCommand('copy')

    tooltip.setAttribute('style' , 'opacity : 1')
  })

  copy.addEventListener('mouseout' , () => {
    tooltip.setAttribute('style' , 'opacity : 0 ')
    tooltip.setAttribute('style' , 'transition : opacity 5s')
  })
  
}

process()