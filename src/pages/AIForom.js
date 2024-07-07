import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FormControlLabel, RadioGroup, Radio, FormControl, FormLabel } from '@mui/material';

function SurveyForm() {
  return (

    <div className="container">
    <div className="home-content text-center mb-5">
    <h1>Let Us Know The Child</h1>
      <div className="card-body">
      <Container className="mt-4">
 

      <Form>
        <section>
          <h2>Interests and Hobbies</h2>
          <FormControl component="fieldset">
            <FormLabel component="legend">What are your favorite hobbies or activities?</FormLabel>
            <RadioGroup name="hobbies">
              <FormControlLabel value="Reading" control={<Radio />} label="Reading" />
              <FormControlLabel value="Playing sports" control={<Radio />} label="Playing sports" />
              <FormControlLabel value="Traveling" control={<Radio />} label="Traveling" />
              <FormControlLabel value="Crafting/DIY projects" control={<Radio />} label="Crafting/DIY projects" />
              <FormControlLabel value="Gaming" control={<Radio />} label="Gaming" />
            </RadioGroup>
          </FormControl>
        </section>

        <section className="mt-4">
          <h2>Lifestyle</h2>
          <FormControl component="fieldset">
            <FormLabel component="legend">How do you usually spend your weekends or free time?</FormLabel>
            <RadioGroup name="weekends">
              <FormControlLabel value="Relaxing at home" control={<Radio />} label="Relaxing at home" />
              <FormControlLabel value="Going out with friends" control={<Radio />} label="Going out with friends" />
              <FormControlLabel value="Exploring nature" control={<Radio />} label="Exploring nature" />
              <FormControlLabel value="Attending events or social gatherings" control={<Radio />} label="Attending events or social gatherings" />
              <FormControlLabel value="Working on personal projects" control={<Radio />} label="Working on personal projects" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" className="mt-4">
            <FormLabel component="legend">Are you more of an indoor or outdoor person?</FormLabel>
            <RadioGroup name="indoorOutdoor">
              <FormControlLabel value="Indoor" control={<Radio />} label="Indoor" />
              <FormControlLabel value="Outdoor" control={<Radio />} label="Outdoor" />
            </RadioGroup>
          </FormControl>
        </section>

        <section className="mt-4">
          <h2>Preferences</h2>
          <FormControl component="fieldset">
            <FormLabel component="legend">Do you prefer practical gifts or something more sentimental?</FormLabel>
            <RadioGroup name="gifts">
              <FormControlLabel value="Practical" control={<Radio />} label="Practical" />
              <FormControlLabel value="Sentimental" control={<Radio />} label="Sentimental" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" className="mt-4">
            <FormLabel component="legend">Is there a particular type of product or category you're interested in?</FormLabel>
            <RadioGroup name="productCategory">
              <FormControlLabel value="Tech gadgets" control={<Radio />} label="Tech gadgets" />
              <FormControlLabel value="Fashion" control={<Radio />} label="Fashion" />
              <FormControlLabel value="Home decor" control={<Radio />} label="Home decor" />
              <FormControlLabel value="Fitness equipment" control={<Radio />} label="Fitness equipment" />
              <FormControlLabel value="Books or media" control={<Radio />} label="Books or media" />
            </RadioGroup>
          </FormControl>
        </section>

        <section className="mt-4">
          <h2>Personal Style</h2>
          <FormControl component="fieldset">
            <FormLabel component="legend">How would you describe your personal style?</FormLabel>
            <RadioGroup name="style">
              <FormControlLabel value="Modern" control={<Radio />} label="Modern" />
              <FormControlLabel value="Classic" control={<Radio />} label="Classic" />
              <FormControlLabel value="Bohemian" control={<Radio />} label="Bohemian" />
              <FormControlLabel value="Minimalistic" control={<Radio />} label="Minimalistic" />
              <FormControlLabel value="Eclectic" control={<Radio />} label="Eclectic" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" className="mt-4">
            <FormLabel component="legend">Do you prefer minimalistic designs or something more colorful and elaborate?</FormLabel>
            <RadioGroup name="design">
              <FormControlLabel value="Minimalistic" control={<Radio />} label="Minimalistic" />
              <FormControlLabel value="Colorful and elaborate" control={<Radio />} label="Colorful and elaborate" />
            </RadioGroup>
          </FormControl>
        </section>

        <section className="mt-4">
          <h2>Special Interests</h2>
          <FormControl component="fieldset">
            <FormLabel component="legend">Are there any specific brands or products you've been eyeing recently?</FormLabel>
            <RadioGroup name="brands">
              <FormControlLabel value="Yes, a specific brand" control={<Radio />} label="Yes, a specific brand" />
              <FormControlLabel value="No, open to suggestions" control={<Radio />} label="No, open to suggestions" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" className="mt-4">
            <FormLabel component="legend">Do you have any favorite movies, TV shows, or books?</FormLabel>
            <RadioGroup name="favorites">
              <FormControlLabel value="Yes, specific favorites" control={<Radio />} label="Yes, specific favorites" />
              <FormControlLabel value="No, open to new things" control={<Radio />} label="No, open to new things" />
            </RadioGroup>
          </FormControl>
        </section>

        <section className="mt-4">
          <h2>Experiences</h2>
          <FormControl component="fieldset">
            <FormLabel component="legend">Would you enjoy an experience-based gift?</FormLabel>
            <RadioGroup name="experienceGift">
              <FormControlLabel value="Yes, love experiences" control={<Radio />} label="Yes, love experiences" />
              <FormControlLabel value="No, prefer physical gifts" control={<Radio />} label="No, prefer physical gifts" />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" className="mt-4">
            <FormLabel component="legend">Is there a place you've always wanted to visit or an activity you've wanted to try?</FormLabel>
            <RadioGroup name="visitActivity">
              <FormControlLabel value="Yes, a specific place or activity" control={<Radio />} label="Yes, a specific place or activity" />
              <FormControlLabel value="No, open to any new experience" control={<Radio />} label="No, open to any new experience" />
            </RadioGroup>
          </FormControl>
        </section>
      </Form>
    </Container>

      </div>

        </div>
        </div>

  );
}

export default SurveyForm;
