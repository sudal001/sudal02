import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const useUserStore = create(
  immer(
    combine(
      {
        user: {
          name: 'Neo',
          age: 22,
          address: {
            city: 'Seoul',
            country: 'Korea',
            eamils: ['neo@gmail.com', 'neo@naver.com']
          }
        }
      },
      set => {
        return {
          changeFirstEmail: (email: string) => {
            set(state => {
              state.user.address.emails[0] = email
            })

            //   set(state => {
            //     return {
            //       user: {
            //         ...state.user.address,
            //         emails: [email, state.user.address.eamils[1]]
            //       }
            //     }
            //   })
          }
        }
      }
    )
  )
)
