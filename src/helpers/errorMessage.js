import Swal from 'sweetalert2'

export const errorMessage = (err, msg) => {
  console.error(err)
  Swal.fire(
    'Ops!',
    msg || 'Aconteceu um erro, desculpe o transtorno',
    'error'
  )
}