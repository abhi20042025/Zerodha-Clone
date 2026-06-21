import React from 'react';
// Importing the two child components
import Hero from './Hero';
import CreateTicket from './CreateTicket';

function SupportPage() {
    return ( 
        <div style={styles.pageContainer}> 
            {/* Upper Section */}
            <Hero /> 
    
            <CreateTicket />
        </div>
     );
}

// Optional layout wrapper to match the clean background structure
const styles = {
    pageContainer: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        margin: 0,
        padding: 0,
    }
};

export default SupportPage;