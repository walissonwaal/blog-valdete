// import { format, parseISO } from 'date-fns'

// export default function PostDate({ dateString }: { dateString: string }) {
//   if (!dateString) return null

//   const date = parseISO(dateString)
//   return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
// }

import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default function PostDate({ dateString }: { dateString: string }) {
if (!dateString) return null

const date = parseISO(dateString)
return <time dateTime={dateString}>{format(date, "'Dia' d 'de' LLLL 'de' yyyy", { locale: ptBR })}</time>
}