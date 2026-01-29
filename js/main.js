// JavaScript for James D. Gardner Resume Website

// Project Image Viewer Functions
function showProjectImage(imgElement) {
  const viewer = document.getElementById('project-image-viewer');
  const viewerImage = document.getElementById('viewer-image');
  const viewerTitle = document.getElementById('viewer-title');
  
  // Set the image source and alt text
  viewerImage.src = imgElement.src;
  viewerImage.alt = imgElement.alt;
  
  // Set the title
  viewerTitle.textContent = imgElement.alt;
  
  // Show the viewer
  viewer.style.display = 'block';
  
  // Smooth scroll to the viewer
  setTimeout(() => {
    viewer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

function closeProjectImage() {
  const viewer = document.getElementById('project-image-viewer');
  viewer.style.display = 'none';
}

// Close viewer when clicking outside the image
document.addEventListener('click', function(event) {
  const viewer = document.getElementById('project-image-viewer');
  const viewerContent = document.querySelector('.image-viewer-content');
  
  if (viewer && viewer.style.display === 'block') {
    if (event.target === viewerContent) {
      closeProjectImage();
    }
  }
});

// Close viewer with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeProjectImage();
  }
});
