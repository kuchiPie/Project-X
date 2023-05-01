import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NotFoundPage = (props) => {

  const { userType, loggedUser } = useSelector(state=> state.login)
  return (
    <Card title="404 - Page Not Found" >
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
              </div>
              <div class="contant_box_404">
                <h3 class="h2">
                  Looks like you're lost
                </h3>
                <p>the page you are looking for is not avaible!</p>
                <div>
                    {userType == "Student" ? (
                      <Link to='/student/'><Button label="Go to Home" /></Link>
                    ) : userType == "Admin" ? (
                      <Link to='/admin/'><Button label="Go to Home" /></Link>
                    ) : userType == "Faculty" ? (
                      <Link to='/faculty/'><Button label="Go to Home" /></Link>
                    ) : (
                      <Link to='/'><Button label="Login" /></Link>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>

  );
};

export default NotFoundPage;