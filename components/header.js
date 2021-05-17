import Link from 'next/link'

  export default  class Header extends React.Component {

    state = {isExpanded: false};

    handleClick = e => {
      e.preventDefault();
      this.setState(prevState => ({
        isExpanded: !prevState.isExpanded
      }))
    };

  render() {
  return (
    <header className="bg-tana-black">
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 md:p-8">
        <Link href="/">
          <h1 className="flex items-center text-white no-underline">
            <span className="text-xl font-bold tracking-tight">
              Gorilla Development
              </span>
          </h1>
        </Link>

      </div>
    </header>
  )};
          }