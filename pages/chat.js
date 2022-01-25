import { Box} from "@skynexui/components"
import appConfig from '../config.json';

export default function PaginaDoChat() {
  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: 'url(https://www.themoviedb.org/t/p/original/9ilNwwf9YzDV2lNJ3JUKGgXvHP7.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.primary[900], opacity : '0.9',
          }}
        >
          <h2>Chat</h2>
        </Box>
      </Box>
    </>
  )
}
  
    

    

        



        