namespace DrugDevProgram {
    interface DetailedI {
        show: boolean
        handleClose: () => void
        data: Record<string, any>
    }
}
