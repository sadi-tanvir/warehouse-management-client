import { Link,useResolvedPath,useMatch } from "react-router-dom";


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });


    const styleNave = {
      color:match ? '#0369a1':'#334155',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: match ?'19px' :'17px'
    }
  
    return (
      <div>
        <Link
          style={styleNave}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }



  export default CustomLink