import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Oyun qaydaları" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        6 cəhddə sözü tapın. Hər təxmindən sonra plitələrin rəngi təxmininizin
        gizli sözə nə qədər yaxın olduğundan asılı olaraq dəyişəcək. <br></br>
        Təxmininizi yoxlamaq üçün "Yoxla" düyməsini basmağı unutmayın!
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="B"
          status="correct"
        />
        <Cell value="A" />
        <Cell value="Z" />
        <Cell value="A" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        B hərfi gizli sözdədir və düzgün yerdədir
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell value="A" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Ş"
          status="present"
        />
        <Cell value="Ç" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ş hərfi gizli sözdədir lakin səhv yerdədir
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="M" />
        <Cell value="O" />
        <Cell isRevealing={true} isCompleted={true} value="R" status="absent" />
        <Cell value="F" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        R hərfi gizli sözün tərkibində deyil
      </p>
    </BaseModal>
  )
}
