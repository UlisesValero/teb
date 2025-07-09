const Container = ( {children, isNav = false} ) => {
    return (
        <div className={`w-full ${!isNav ? "h-fit" : ''} z-40 flex justify-center`}>
            <div className="w-[80%] lg:w-[75%]">
            {children}
            </div>
        </div>
    )
}

export default Container