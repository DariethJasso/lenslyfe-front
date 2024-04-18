import SearchIcon from '@mui/icons-material/Search';
export default function Search(){
    return (
        <div className='flex items-center px-1 border border-white rounded-xl w-auto'>
            <input className='bg-transparent w-[150px] placeholder-white' type="text" placeholder="Search" />
            <SearchIcon sx={{ color: 'white', fontSize: 20 }} />
        </div>
    )
}