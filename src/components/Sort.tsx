import DropdownFilter from './DropdownFilter'

export default function Sort() {
  const sortByOptions = [
    { value: 'latest', label: 'susah' },     
    { value: 'oldest', label: 'senang' },
  ]

  return <DropdownFilter queryKey="sortBy" options={sortByOptions} />
}
