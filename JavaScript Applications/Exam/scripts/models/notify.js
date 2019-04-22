let notify = (() => {
  $(document).on({
    ajaxStart: () => $('#loadingBox').show(),
    ajaxStop: () => $('#loadingBox').fadeOut()
  })

  function showInfo(message) {
    setTimeout(() => {
      let infoBox = $('#successBox');
      infoBox.text(message);
      infoBox.show();

      infoBox.on('click', () => {
        infoBox.fadeOut();
      })
      setTimeout(() => infoBox.fadeOut(), 2000)
    }, 500);

  }

  function showError(message) {
    setTimeout(() => {
      let errorBox = $('#errorBox');
      errorBox.text(message);
      errorBox.show();
      
      errorBox.on('click',() => {
        errorBox.fadeOut();
      })
      
      setTimeout(() => errorBox.fadeOut(), 2000)
    }, 500);

  }

  function handleError(reason) {
    showError(reason.responseJSON.description)
  }

  return {
    showInfo,
    showError,
    handleError
  }
})();