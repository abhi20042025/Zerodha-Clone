import React from 'react';

const Hero = () => {
  return (
    <div style={styles.heroContainer}>
      <div style={styles.headerRow}>
        <h1 style={styles.title}>Support Portal</h1>
        <button style={styles.ticketBtn}>My tickets</button>
      </div>

      <div style={styles.searchContainer}>
        {/* Clean SVG Magnifying glass matching the original */}
        <svg style={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          type="text" 
          placeholder="Eg: How do I open my account, How do i activate F&O..." 
          style={styles.searchInput}
        />
      </div>
    </div>
  );
};

const styles = {
  heroContainer: {
    maxWidth: '1050px',
    margin: '0 auto',
    padding: '35px 20px 25px 20px',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
  },
  title: {
    fontSize: '30px',
    fontWeight: '500',
    color: '#444444',
    margin: 0,
    letterSpacing: '-0.5px'
  },
  ticketBtn: {
    backgroundColor: '#387ed1',
    color: 'white',
    border: 'none',
    padding: '11px 22px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    padding: '14px 20px',
    backgroundColor: '#fff',
  },
  searchIcon: {
    marginRight: '14px',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: '14px',
    color: '#444',
    fontFamily: 'inherit'
  }
};

export default Hero;