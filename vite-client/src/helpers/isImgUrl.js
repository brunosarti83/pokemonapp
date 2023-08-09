

export async function isImgUrl(url) {
    return fetch(url, {method: 'HEAD'}).then(res => {
      return res.headers.get('Content-Type').startsWith('image')
    })
}