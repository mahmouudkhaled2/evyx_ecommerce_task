import LoadingSpinner from "@/components/common/loading/loading-spinner"


type LoadingButtonProps = {
    loading: boolean,
    title?: string,
    styles?: string,
    type?: 'button' | 'reset' | 'submit',
    disabled?: boolean,
}

export default function CustomButton({loading, styles, type, title, disabled} : LoadingButtonProps) {
    return (

        <>
        <div>
            <button type={type} className={styles} disabled={disabled}>
              { loading && <LoadingSpinner/>} 
              { !loading && title} 
            </button>
        </div>
        </>

    ) 
}